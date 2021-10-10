import React from 'react';

import {View, Text} from 'react-native';

const App = () => {
  return (
    <View style={{padding: 20}}>
      <View
        style={{
          height: 120,
          backgroundColor: '#C9C9FF',
          borderRadius: 10,
          margin: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>#C9C9FF</Text>
      </View>
      <View
        style={{
          height: 120,
          backgroundColor: '#3D85C6',
          borderRadius: 10,
          margin: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>#3D85C6</Text>
      </View>
      <View
        style={{
          height: 120,
          backgroundColor: '#96CC96',
          borderRadius: 10,
          margin: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>#96CC96</Text>
      </View>
      <View
        style={{
          height: 120,
          backgroundColor: '#F4B940',
          borderRadius: 10,
          margin: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>#F4B940</Text>
      </View>
    </View>
  );
};

export default App;
