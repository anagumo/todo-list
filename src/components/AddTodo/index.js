import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { Form, Item, Input, Button, Text as NBText } from 'native-base'

export default class AddTodo extends Component {

  state = {
    task: ''
  }

  static navigationOptions = {
    title: 'Add Todo'
  }

  onAdd = () => {
    if (this.state.task !== '') {
      this.props.navigation.state.params.saveItem(this.state.task)
      this.props.navigation.goBack()
    } else {
      console.warn("Type some text")
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Form>
          <Item>
            <Input
              placeholder="Task"
              onChange={e => this.setState({ task: e.nativeEvent.text })}
              value={this.state.task}
            />
          </Item>
        </Form>

        <Button
          style={styles.button}
          onPress={this.onAdd}>
          <NBText>Add</NBText>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  button: {
    alignSelf: 'flex-end',
    marginTop: 20
  }
})
