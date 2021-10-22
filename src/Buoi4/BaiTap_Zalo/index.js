import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  FlatList,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import blackwindow from './Zalo/blackwidow.jpeg';
import captain from './Zalo/captain.jpg';
import flash from './Zalo/flash.jpg';
import ironman from './Zalo/ironman.jpeg';
import spiderman from './Zalo/spiderman.jpeg';
import strange from './Zalo/strange.jpg';
import suppergirl from './Zalo/suppergirl.jpg';
import wanda from './Zalo/wanda.jpg';
import wonderwoman from './Zalo/wonderwoman.jpg';
import yasuo from './Zalo/yasuo.jpg';

import Friendlist from './Friendlist';

export default class App extends Component {
  listCase = [
    {
      name: ' blackwindow',
      icon: blackwindow,
      friend: '15 Bạn chung',
      backgroundColor: '#824671CC',
    },

    {
      name: 'captain',
      icon: captain,
      friend: '1 bạn chung',
      backgroundColor: '#F4B940',
    },
    {
      name: 'flash',
      icon: flash,
      friend: '15 bạn chung',
      backgroundColor: '#f3ff',
    },
    {
      name: 'ironman',
      icon: ironman,
      friend: '12 bạn chung',
      backgroundColor: '#aaa',
    },
    {
      name: 'spiderman',
      icon: ironman,
      friend: '12 bạn chung',
      backgroundColor: '#aaa',
    },
    {
      name: 'strange',
      icon: strange,
      friend: '12 bạn chung',
      backgroundColor: '#aaa',
    },
    {
      name: 'wanda',
      icon: wanda,
      friend: '12 bạn chung',
      backgroundColor: '#aaa',
    },
    {
      name: 'wonderwoman',
      icon: wonderwoman,
      friend: '12 bạn chung',
      backgroundColor: '#aaa',
    },
    {
      name: 'yasuo',
      icon: yasuo,
      friend: '12 bạn chung',
      backgroundColor: '#aaa',
    },
  ];

  renderItem = ({item}) => <Friendlist game={item} />;
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cap}>
          <Icon
            size={16}
            color={'black'}
            style={{fontWeight: '1200'}}
            name="back-in-time"
          />
          <Text style={{fontWeight: '900', marginLeft: 10}}>
            Danh Sách tìm kiếm gần đây
          </Text>
        </View>
        <View style={styles.top}>
          <View style={styles.image}>
            <Image style={styles.icon} source={blackwindow}></Image>
          </View>
          <View style={styles.image}>
            <Image style={styles.icon} source={captain}></Image>
          </View>
          <View style={styles.image}>
            <Image style={styles.icon} source={flash}></Image>
          </View>
          <View style={styles.image}>
            <Image style={styles.icon} source={ironman}></Image>
          </View>
        </View>
        <View style={styles.cap}>
          <Ionicons size={16} color={'black'} name="ios-people" />
          <Text style={{fontWeight: '900', marginLeft: 10}}>Gợi ý Kết Bạn</Text>
        </View>
        <View style={styles.list}>
          <FlatList
            contentContainerStyle={styles.flist}
            data={this.listCase}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => `${item.title}_${index}`}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cap: {
    flexDirection: 'row',
    marginBottom: 5,

    marginHorizontal: 10,
  },

  container: {
    marginTop: 70,
    justifyContent: 'center',
    marginBottom: 50,
  },

  top: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5,
    // height: 90,

    // backgroundColor: 'blue',
  },
  list: {
    paddingBottom: 50,
    marginBottom: 50,
  },
  flist: {
    // flex: 1,
    marginVertical: 15,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },

  image: {
    marginHorizontal: 5,
    // backgroundColor: 'red',
    borderRadius: 35,
    height: 70,
    width: 70,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  icon: {
    width: 70,
    height: 70,
    // justifyContent: 'center',
    borderRadius: 35,
  },
});
