import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'username',
      password: 'password'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />
        <TextInput
          style={styles.input}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  input: {
    height: 40,
    padding: 5,
    // borderColor: 'gray',
    // borderWidth: 1,
    marginBottom: 5,
    backgroundColor: '#ff6f6b',
  },
});
