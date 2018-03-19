
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  ActivityIndicator,
  Image
} from 'react-native';

import TodoItem from './../TodoItem'
import { Button, Text as NBText } from 'native-base'
import CheckImage from './../../images/check.png'
import { tasks } from './../../lib/api'

export default class TodoList extends Component {
  static navigationOptions = {
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Image
        style={[styles.icon, { tintColor }]}
        source={CheckImage} />
    ),
    tabBarLabel: 'List'
  }

  state = {
    items: null
  }

  componentDidMount() {
    this.fetchTasksList()
  }

  fetchTasksList() {
    tasks('GET')
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
    tasks('POST', { task: newTask })
    .then(items => {
      this.setState({
        items: items
      })
    })
  }

  updateTodo = (id, completed) => {
    tasks('PUT', { id, completed })
    .then(items => {
      this.setState({
        items: items
      })
    })
  }

  deleteTodo = (id) => {
    tasks('DELETE', { id })
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
                updateTodo={this.updateTodo}
                deleteTodo={this.deleteTodo}
              />
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
  },
  icon: {
    height: 20,
    resizeMode: 'contain'
  }
})
