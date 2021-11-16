import axios from 'axios';
import React, {Component} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import {ButtonIcon, IconButton} from './components';
import {fontIcon} from './components/IconButton';

export default class LayoutBTVN extends Component {
  state = {
    listCategory: [],
    listProduct: [],
  };

  componentDidMount() {
    const getAllCategory = axios({
      url: 'http://svcy3.myclass.vn/api/Product/getAllCategory',
      method: 'GET',
    });
    const getAllProduct = axios({
      url: 'http://svcy3.myclass.vn/api/Product',
      method: 'GET',
    });
    Promise.all([getAllCategory, getAllProduct])
      .then(([resultCategory, resultProduct]) => {
        const listCategory = resultCategory.data.content;
        const listProduct = resultProduct.data.content;
        this.setState({listCategory, listProduct});
      })
      .catch(error => console.log(error));
  }

  renderListProduct = ({item, index}) => {
    return <View style={styles.cardProduct} />;
  };

  render() {
    const {listCategory, listProduct} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <IconButton name="close" size={30} color="#fff" />
          <IconButton
            name="sliders"
            size={30}
            color="#fff"
            font={fontIcon.fontAwesome}
          />
        </View>
        <View style={styles.listCat}>
          <FlatList
            style={styles.category}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={listCategory}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.categoryButton}>
                <Text style={styles.categoryTitle}>{item.category}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.listProduct}>
          <FlatList
            columnWrapperStyle={{justifyContent: 'space-between'}}
            data={listProduct}
            renderItem={this.renderListProduct}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View style={styles.buttonContainer}>
          <ButtonIcon
            onPress={this.getItem}
            name="twitch"
            font={fontIcon.fontAwesome}
            size={25}
            style={styles.logoBtn}
          />
          <ButtonIcon
            name="youtube"
            font={fontIcon.fontAwesome}
            size={25}
            style={styles.logoBtn}
          />
          <ButtonIcon
            name="facebook"
            font={fontIcon.fontAwesome}
            size={25}
            style={styles.logoBtn}
          />
          <ButtonIcon
            name="instagram"
            font={fontIcon.fontAwesome}
            size={25}
            style={styles.logoBtn}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.5,
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listCat: {
    flex: 0.7,
  },
  listProduct: {
    flex: 8.3,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#000',
    flexDirection: 'row',
  },
  category: {
    height: 50,
    flexGrow: 0,
    marginBottom: 10,
    paddingLeft: 10,
  },
  categoryButton: {
    paddingVertical: 10,
    marginRight: 20,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  cardProduct: {
    width: '46%',
    height: 180,
    backgroundColor: 'gray',
    marginBottom: 30,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  logoBtn: {},
});
