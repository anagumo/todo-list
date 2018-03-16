
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar
} from 'react-native';

import { Button, Text as NBText } from 'native-base'
import TodoItem from './../TodoItem'

export default class TodoList extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    items: []
  }

  addItem = () => {
    this.props.navigation.navigate(
      'AddTodo',
      { saveItem: this.saveItem }
    )
  }

  saveItem = (newTask) => {
    this.setState({
      items: [...this.state.items, newTask]
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
          <FlatList
            style={styles.content}
            data= {this.state.items}
            renderItem={(row) => {
              return <TodoItem title={row.item} />
            }}
            keyExctractor={item => item}
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
