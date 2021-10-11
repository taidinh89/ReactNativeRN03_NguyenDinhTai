import React from 'react';

import {View, Text,StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={{padding: 20}}>

      <Text style={textStyle}>Buoi2</Text>

      <View style={Styles.boxStyle}>
        <Text>#C9C9dFF</Text>
      </View>
      <View style={Styles.boxStyle}>
        <Text>#3D85C6</Text>
      </View>
      <View style={boxStyle}>
        <Text>#96CC96</Text>
      </View>
      <View style={boxStyle}>
        <Text>#F4B940</Text>
      </View>
    </View>
  );
};

const Styles =StyleSheet.create({
  boxStyle = {
    height: 120,
    backgroundColor: '#F4B940',
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const boxStyle = {
  height: 120,
  backgroundColor: '#F4B940',
  borderRadius: 10,
  margin: 10,
  alignItems: 'center',
  justifyContent: 'center',
};

const textStyle = {
  fontWeight: '900',
};

export default App;
