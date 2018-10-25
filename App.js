
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
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import TodoList from './src/components/TodoList'
import About from './src/components/About'
import AddTodo from './src/components/AddTodo'
import rootReducer from './src/reducers'

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

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <TabNav />
      </Provider>
    )
  }
}

export default App
