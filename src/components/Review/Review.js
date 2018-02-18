import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Review extends Component {
  render() {
    return (
      <View>
        <Icon name="playlist-plus" style={styles.addReceipt}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addReceipt: {
    fontSize: 60,
    color: 'black',
    textAlign: 'right',
    marginTop: 10,
  },
});
