
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  ActivityIndicator,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import TodoItem from './../TodoItem'
import { Button, Text as NBText, Segment } from 'native-base'
import CheckImage from './../../images/check.png'
import { tasks } from './../../lib/api'
import { addTodo } from './../../actions/todos'
import {
  todoItems,
  completedItems,
  uncompletedItems
} from '../../selectors/todos'

class TodoList extends Component {
  static navigationOptions = {
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Image
        style={[styles.icon, { tintColor }]}
        source={CheckImage} />
    ),
    tabBarLabel: 'List'
  }

  state = {
    items: null,
    filter: 'All'
  }

  componentDidMount() {
    this.fetchTasksList()
  }

  fetchTasksList() {
    tasks('GET')
    .then(items => {
      this.setState({
        items: items
      })
    })
  }

  addItem = () => {
    this.props.navigation.navigate('AddTodo')
  }

  updateTodo = (id, completed) => {
    tasks('PUT', { id, completed })
    .then(items => {
      this.setState({
        items: items
      })
    })
  }

  deleteTodo = (id) => {
    tasks('DELETE', { id })
    .then(items => {
      this.setState({
        items: items
      })
    })
  }

  filteredItems = () => {
    if (this.state.filter == 'Todo') {
      return this.props.uncompletedItems
    }
    if (this.state.filter == 'Complete') {
      return this.props.completedItems
    }
    return this.props.items
  }

  render() {

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Todo List
          </Text>
        </View>
        <View style={styles.contentWrapper}>
          <View style={styles.contentHeader}>
            <Segment style={styles.segment}>
              <Button
                first={true}
                active={this.state.filter === 'All'}
                onPress={() => this.setState({ filter: 'All'})}
                >
                <NBText>All</NBText>
              </Button>
              <Button
                active={this.state.filter === 'Todo'}
                onPress={() => this.setState({ filter: 'Todo'})}
                >
                <NBText>Todo</NBText>
              </Button>
              <Button
                lastt={true}
                active={this.state.filter === 'Complete'}
                onPress={() => this.setState({ filter: 'Complete'})}
                >
                <NBText>Complete</NBText>
              </Button>
            </Segment>
          </View>

          {
            !this.state.items && <ActivityIndicator
              size="large"
              color="#2288ee"
              style={{ marginTop: 20 }}
            />
          }

          <FlatList
            style={styles.content}
            data= {this.filteredItems()}
            renderItem={(row) => {
              return <TodoItem
                item={row.item}
                updateTodo={this.updateTodo}
                deleteTodo={this.deleteTodo}
              />
            }}
            keyExctractor={item => item.id}
          />
          <View style={styles.contentFooter}>
            <Button onPress={this.addItem}>
              <NBText>Add TODO</NBText>
            </Button>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    items: todoItems(state),
    completedItems: completedItems(state),
    uncompletedItems: uncompletedItems(state)
  }
}

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoList)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  header: {
    padding: 10,
    paddingTop: 20,
    alignSelf: 'stretch',
    backgroundColor: '#3F51B5'
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff'
  },
  contentWrapper: {
    flex: 1
  },
  contentHeader: {
    height: 50,
    backgroundColor: '#3F51B5',
    borderBottomWidth: 1,
    borderColor: '#aaa',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flex: 1,
    alignSelf: 'stretch',
    paddingTop: 10
  },
  contentFooter: {
    padding: 20,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  icon: {
    height: 20,
    resizeMode: 'contain'
  },
  segment: {
    backgroundColor: '#3F51B5'
  }
})
