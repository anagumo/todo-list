import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native';

export default class AddTodo extends Component {
  static navigationOptions = {
    title: 'Add Todo'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{
          fontSize: 20,
          textAlign: 'center',
          padding: 20
        }}>Add Todo</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
