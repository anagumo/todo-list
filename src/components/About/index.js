import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import AboutImage from './../../images/star.png'

export default class About extends Component {
  static navigationOptions = {
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Image
        style={[styles.icon, { tintColor }]}
        source={AboutImage} />
    ),
    tabBarLabel: 'About'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{
          fontSize: 20,
          textAlign: 'center',
          padding: 20
        }}>About</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    height: 24,
    resizeMode: 'contain'
  }
})
