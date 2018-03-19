import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

import { Icon } from 'native-base'

export default class TodoItem extends Component {

  toggleTodo = () => {
    this.props.updateTodo(
      this.props.item.id,
      !this.props.item.completed
    )
  }

  deleteTodo = () => {
    this.props.deleteTodo(this.props.item.id)
  }

  render() {
    const item = this.props.item

    return (
      <TouchableOpacity
        style={styles.itemButton}
        onPress={this.toggleTodo}
        >
          <Icon name={ item.completed ? 'checkmark-circle' : 'radio-button-off'} />
          <Text style={[styles.item, {
            opacity: (item.completed ? 0.5 : 1.0),
            textDecorationLine: (item.completed ? 'line-through' : 'none')
          }]}>
            {item.task}
          </Text>
          <TouchableOpacity onPress={this.deleteTodo}>
            <Icon
              name='trash'
              style={{
                color: 'red',
                paddingRight: 10
              }}
            />
          </TouchableOpacity>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 10
  },
  itemButton: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#CCC',
    alignItems: 'center',
    paddingLeft: 10
  }
})
