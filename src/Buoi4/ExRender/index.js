import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

// import {angry, care, haha, like, love, sad} from './images';
// import angry from './images/angry.png';
export default class ExRender extends Component {
  array = [0, 1, 2, 3, 4, 5];

  renderEmoji = () => {
    return this.array.map((icon, index) => (
      <View key={index} style={styles.emoji} />
    ));
  };
  render() {
    // console.log(angry);
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}> Bạn cảm thấy thế nào ? </Text>
        <Image
          style={styles.selectedImage}
          source={require('./images/angry.png')}
        />
        <View style={styles.emojiContainer}>{this.renderEmoji()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  emoji: {
    height: 50,
    width: 50,
    backgroundColor: 'gray',
    margin: 10,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: '700',
    fontSize: 18,
  },
  selectedImage: {
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  emojiContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
