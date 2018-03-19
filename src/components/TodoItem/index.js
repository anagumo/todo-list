import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

export default class TodoItem extends Component {

  toggleTodo = () => {
    this.props.updateTodo(
      this.props.item.id,
      !this.props.item.completed
    )
  }

  render() {
    const item = this.props.item

    return (
      <TouchableOpacity
        style={styles.itemButton}
        onPress={this.toggleTodo}
        >
        <Text style={[styles.item, {
          opacity: (item.completed ? 0.5 : 1.0),
          textDecorationLine: (item.completed ? 'line-through' : 'none')
        }]}>
          {item.task}
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
