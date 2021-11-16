import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

export default class Button extends Component {
  render() {
    const {title, backgroundColor} = this.props;
    return (
      // <LinearGradient>
      <TouchableOpacity style={[styles.ButtonContainer, {backgroundColor}]}>
        <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
          {' '}
          {title}{' '}
        </Text>
      </TouchableOpacity>
      // </LinearGradient>
    );
  }
}
Button.defalultProps = {
  backgroundColor: '#fff',
};
const styles = StyleSheet.create({
  ButtonContainer: {
    width: 100,
    height: 60,
    justifyContent: 'center',
    backgroundColor: 'red',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
  },
});
