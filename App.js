
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation'

import TodoList from './src/components/TodoList'
import About from './src/components/About'
import AddTodo from './src/components/AddTodo'

const TodoNav = createStackNavigator({
  TodoList: { screen: TodoList },
  AddTodo: { screen: AddTodo }
}, {
  mode: 'modal'
})

const TabNav = createBottomTabNavigator({
  TodoNav: { screen: TodoNav },
  About: { screen: About }
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#0066cc'
  },
})

export default class App extends Component<Props> {
  render() {
    return (
      <TabNav />
    )
  }
}

const styles = StyleSheet.create({

})
