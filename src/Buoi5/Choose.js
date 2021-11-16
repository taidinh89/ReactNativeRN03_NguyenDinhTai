import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class Choose extends Component {
  render() {
    const selectImage = this.props.selectImage;
    return (
      <View>
        <Image style={styles.selectImage} source={selectImage} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  selectImage: {
    width: 50,
    height: 60,
    backgroundColor: 'red',
    borderWidth: 4,
    borderColor: '#ffff0',
  },
});
