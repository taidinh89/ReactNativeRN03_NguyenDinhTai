import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

export default class Friendlist extends Component {
  render() {
    const {game} = this.props;
    return (
      <View style={[styles.info, {backgroundColor: game.backgroundColor}]}>
        <TouchableWithoutFeedback onPress={() => {}}>
          <>
            <Image source={game.icon} style={styles.icon} />
            <View style={styles.infoContent}>
              <Text style={{fontWeight: '900'}}>{game.name}</Text>
              <Text>{game.friend}</Text>
            </View>
          </>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => {}}>
          <View style={styles.add}>
            <Text>Kết Bạn</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  add: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: 80,
    height: 30,
    alignSelf: 'center',
  },
  info: {
    width: '80%',
    borderRadius: 10,
    paddingVertical: 20,
    marginVertical: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
  },
  infoContent: {
    width: '70%',
    marginLeft: 10,
  },
});
