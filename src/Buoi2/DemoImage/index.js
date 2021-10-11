import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';

export default class index extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Image
          style={{width: 200, height: 300}}
          source={require('./anh-cho-corgi162.jpg')}
        />
        <Image
          style={{width: 200, height: 200}}
          source={{
            uri: 'https://thucanh.net/wp-content/uploads/2021/03/anh-cho-corgi162.jpg',
          }}
        />
        <TextInput
          placeholder="Balance"
          keyboardType="number-pad"
          style={{borderWidth: 3, borderColor: 'blue', width: '100%'}}
        />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#bbb',
  },
});
