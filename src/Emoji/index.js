import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const data = [
  {image: require('./images/angry.png')},
  {image: require('./images/care.png')},
  {image: require('./images/haha.png')},
  {image: require('./images/like.png')},
  {image: require('./images/love.png')},
  {image: require('./images/sad.png')},
];

export default class Emoji extends Component {
  onPressButton = image => {
    this.setState({image0: image});
  };

  state = {
    image0: require('./images/love.png'),
  };

  renderList = () => {
    return data.map((game, index) => {
      console.log(game.image);
      return (
        <TouchableOpacity
          key={index}
          style={styles.image}
          onPress={() => {
            this.onPressButton(game.image);
          }}>
          <Image style={styles.image} source={game.image} />
        </TouchableOpacity>
      );
    });
  };

  main = image => {
    return <Image style={styles.image} source={image} />;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Bạn đang cảm thấy thế nào ?</Text>
        <View style={styles.main}>{this.main(this.state.image0)}</View>
        <View style={styles.containImage}>{this.renderList()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    width: 300,
    height: 300,
  },
  title: {textTransform: 'uppercase', fontWeight: '900', marginVertical: 40},
  containImage: {
    marginVertical: 40,
    flexDirection: 'row',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
