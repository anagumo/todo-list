import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import AboutImage from './../../images/star.png'

class About extends Component {
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
    const completedItems = this.props.items.filter(item => {
      return item.completed
    }).length
    const uncompletedItems = this.props.items.filter(item => {
      !item.completed
    }).length

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          About
        </Text>
        <Text style={styles.count}>
          Completed tasks: {completedItems}
        </Text>
        <Text style={styles.count}>
          Uncompleted tasks: {uncompletedItems}
        </Text>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.todos.items
  }
}

export default connect(mapStateToProps)(About)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  icon: {
    height: 24,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 20,
    padding: 20
  },
  count: {
    fontSize: 16
  }
})
