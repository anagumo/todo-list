
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  ActivityIndicator
} from 'react-native';

import { Button, Text as NBText } from 'native-base'
import TodoItem from './../TodoItem'

export default class TodoList extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    items: null
  }

  componentDidMount() {
    this.fetchTasksList()
  }

  fetchTasksList() {
    fetch("your_base_url/items.json")
      .then(response => response.json())
      .then(items => {
        this.setState({
          items: items
        })
      })
  }

  addItem = () => {
    this.props.navigation.navigate(
      'AddTodo',
      { saveItem: this.saveItem }
    )
  }

  saveItem = (newTask) => {
    const headers = new Headers()
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json')

    fetch("your_base_url/items.json", {
      method: 'POST',
      headers,
      body: JSON.stringify({
        task: newTask
      })
    })
    .then(response => response.json())
    .then(items => {
      this.setState({
        items: items
      })
    })
  }

  updateTodo = (id, completed) => {
    const headers = new Headers()
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json')

    fetch("your_base_url/items.json", {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        id,
        completed
      })
    })
    .then(response => response.json())
    .then(items => {
      this.setState({
        items: items
      })
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Todo List
          </Text>
        </View>
        <View style={styles.contentWrapper}>
          <View style={styles.contentHeader}>
            <Text>Content Header</Text>
          </View>

          {
            !this.state.items && <ActivityIndicator
              size="large"
              color="#2288ee"
              style={{ marginTop: 20 }}
            />
          }

          <FlatList
            style={styles.content}
            data= {this.state.items}
            renderItem={(row) => {
              return <TodoItem
                item={row.item}
                updateTodo={this.updateTodo}/>
            }}
            keyExctractor={item => item.id}
          />
          <View style={styles.contentFooter}>
            <Button onPress={this.addItem}>
              <NBText>Add Item</NBText>
            </Button>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  header: {
    padding: 10,
    paddingTop: 20,
    alignSelf: 'stretch',
    backgroundColor: '#2288ee'
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff'
  },
  contentWrapper: {
    flex: 1
  },
  contentHeader: {
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#aaa',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flex: 1,
    alignSelf: 'stretch'
  },
  contentFooter: {
    padding: 20,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  }
})
