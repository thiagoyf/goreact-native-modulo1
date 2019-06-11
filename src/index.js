import './config/ReactotronConfig';
import './config/DevToolsConfig';

import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, Button,
} from 'react-native';

import { toUnicode } from 'punycode';
import Todo from '~/components/Todo';

export default class App extends Component {
  state = {
    todos: [{ id: 0, text: 'Fazer café' }, { id: 1, text: 'Estudar o GoNative' }],
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), text: 'Estudar JavaScript' }],
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.todos.map(todo => (
          <Todo key={todo.id} title={todo.text} />
        ))}
        <Button title="Adicionar todo" onPress={this.addTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
