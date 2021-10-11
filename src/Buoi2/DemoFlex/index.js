import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class DemoFlex extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentTop}>
          <View style={styles.topItem}></View>
          <View style={styles.topItem}></View>
        </View>
        <View style={styles.contentBottom}>
          <View style={styles.botItem}></View>
          <View style={styles.botItem}></View>
          <View style={styles.botItem}></View>
          <View style={styles.botItem}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentTop: {
    flex: 1,
    backgroundColor: '#96cc96',
    marginBottom: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
  },
  topItem: {
    backgroundColor: '#f4B940',
    height: '30%',
    borderRadius: 10,
  },
  contentBottom: {
    flex: 1,
    backgroundColor: '#96cc96',
    marginBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    borderRadius: 10,
  },
  botItem: {
    backgroundColor: 'blue',
    height: '25%',
    width: '30%',
    margin: 20,
    borderRadius: 10,
  },
});

{
  /* <View style={{marginTop: 50, flex: 1}}>
        <View
          style={{
            backgroundColor: 'pink',
            flex: 1,
            justifyContent: 'space-around',
            borderRadius: 10,
          }}>
          <View
            style={{
              backgroundColor: '#Cd3',
              borderRadius: 10,
              height: '30%',
            }}></View>
          <View
            style={{
              backgroundColor: '#C9C9Ff',
              height: '30%',
              borderRadius: 10,
            }}></View>
        </View>
        <View style={{flex: 1, backgroundColor: 'green'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: 'red',
                width: '25%',
                height: '45%',
              }}></View>
            <View
              style={{
                backgroundColor: 'blue',
                width: '25%',
                height: '45%',
              }}></View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: 'red',
                width: '25%',
                height: '45%',
              }}></View>
            <View
              style={{
                backgroundColor: 'blue',
                width: '25%',
                height: '45%',
              }}></View>
          </View>
        </View>
      </View> */
}
