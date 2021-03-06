/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Splash from './src/components/Splash';
import Login from './src/components/Login/Login';
import Review from './src/components/Review/Review';


export default class CraveNative extends Component {
  render() {
    return (
        <Review/>
    );
  }
}


// skip this line if using Create React Native App
AppRegistry.registerComponent('CraveNative', () => CraveNative);
