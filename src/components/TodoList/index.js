
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import TodoItem from './../TodoItem'

export default class TodoList extends Component {

  render() {

    const items = [
      '1. Go to the library',
      '2. Call my mom',
      '3. Study Computer Science'
    ]

    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Todo List
        </Text>
        <FlatList
          style={styles.content}
          data= {items}
          renderItem={(row) => {
            return <TodoItem title={row.item} />
          }}
          keyExctractor={item => item}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
})
