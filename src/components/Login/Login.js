import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from 'react-native';

import Splash from '../Splash';
import LoginForm from './LoginForm';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.surround}>
        <View style={styles.container}>
          <View style={styles.splash}>
            <Splash />
          </View>

            <View style={styles.container}>
                <LoginForm />
            </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  surround: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },

});
