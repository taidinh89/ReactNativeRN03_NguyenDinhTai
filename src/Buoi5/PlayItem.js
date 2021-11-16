import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default class PlayItem extends Component {
  render() {
    const {game} = this.props;
    return (
      <View style={styles.iron}>
        <View style={[styles.image, {marginBottom: 5}]}>
          <Image style={[styles.ima, {borderWidth: 2}]} source={paper}></Image>
          <View style={styles.triangle} />
        </View>
        <View style={styles.image}>
          <Image style={styles.ima} source={player}></Image>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    // backgroundColor: 'pink',
  },
  ima: {
    height: 90,
    width: 90,
    borderColor: '#ffff00',
    borderRadius: 10,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 15 / 2,
    borderRightWidth: 15 / 2,
    borderBottomWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#ffff00',
    alignSelf: 'center',
  },
  iron: {
    flex: 1,
    // backgroundColor: 'blue',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thanot: {
    flex: 1,
    // backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
