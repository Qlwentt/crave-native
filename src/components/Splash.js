import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="food-fork-drink" style={styles.food_icon}/>
        <Text style={styles.crave_logo}>Crave</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  crave_logo: {
    fontSize: 50,
    // color: 'white',
    // textAlign: 'center',
    // marginLeft: 5,
  },
  food_icon: {
    fontSize: 60,
    color: '#CE1F12',
  },
});
