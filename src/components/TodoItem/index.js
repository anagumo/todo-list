import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

export default class TodoItem extends Component {

  state = {
    completed: false
  }

  toggleTodo = () => {
    this.setState({ completed: !this.state.completed })
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.itemButton}
        onPress={this.toggleTodo}
        >
        <Text style={[styles.item, {
          opacity: (this.state.completed ? 0.5 : 1.0),
          textDecorationLine: (this.state.completed ? 'line-through' : 'none')
        }]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10
  },
  itemButton: {
    borderBottomWidth: 1,
    borderColor: '#CCC'
  }
})
