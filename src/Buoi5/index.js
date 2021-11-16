import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {background, computer, paper, player, scissor, rock} from './images';
import Choose from './Choose';
import Button from './Button';
export default class RockPaperScissor extends Component {
  render() {
    return (
      <ImageBackground style={styles.container} source={background}>
        <View style={styles.overlay} />
        <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.playContainer}>
            <View style={styles.iron}>
              <View style={[styles.image, {marginBottom: 5}]}>
                <Image
                  style={[styles.ima, {borderWidth: 2}]}
                  source={paper}></Image>
                <View style={styles.triangle} />
              </View>
              <View style={styles.image}>
                <Image style={styles.ima} source={player}></Image>
              </View>
            </View>
            <View style={styles.thanot}>
              <View style={[styles.image, {marginBottom: 5}]}>
                <Image
                  style={[styles.ima, {borderWidth: 2}]}
                  source={scissor}></Image>
                <View style={styles.triangle} />
              </View>
              <View style={styles.image}>
                <Image style={styles.ima} source={computer}></Image>
              </View>
            </View>
          </View>
          <View style={styles.selectContainer}>
            <Choose selectImage={scissor} />
            <Choose selectImage={paper} />
            <Choose selectImage={rock} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Score:0</Text>
            <Text style={styles.infoText}>Times:9</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button title={'play'} backgroundColor={'blue'} />
            <Button title={'Back'} backgroundColor={'red'} />
          </View>
        </SafeAreaView>
      </ImageBackground>
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
  container: {
    flex: 1,
  },
  safeAreaView: {flex: 1},
  overlay: {
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // right: 0,
    // left: 0,
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  playContainer: {
    justifyContent: 'space-between',
    flex: 3,
    flexDirection: 'row',
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
  selectContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  infoContainer: {
    flex: 1,
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'row',

    // backgroundColor: '#bfb',
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
  infoText: {},
});
