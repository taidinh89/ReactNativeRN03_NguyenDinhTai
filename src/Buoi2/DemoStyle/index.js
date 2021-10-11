import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class DemoStyleSheet extends React.Component {
  render() {
    return (
      <View style={{marginTop: 45, flex: 1}}>
        {/* <Text style={Styles.textStyle}> Buoi2</Text> */}
        <View style={[Styles.boxStyle, Styles.boxStylePurple]}>
          <Text>#C9C9FF</Text>
        </View>
        <View style={[Styles.boxStyle, Styles.boxStyleGreen]}>
          <Text>#3D85C6</Text>
        </View>
        <View style={[Styles.boxStyle, Styles.boxStyleBlue]}>
          <Text>#96CC96</Text>
        </View>
        <View style={[Styles.boxStyle, Styles.boxStyleYellow]}>
          <Text style={Styles.textStyle}>#F4B940</Text>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  boxStyle: {
    flex: 1,
    backgroundColor: '#F4B940',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // height: 120,
    // margin: 10,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  boxStyleBlue: {
    backgroundColor: '#96CC96',
  },
  boxStylePurple: {
    backgroundColor: '#C9C9FF',
  },
  boxStyleGreen: {
    backgroundColor: '#3D85C6',
  },
  boxStyleYellow: {
    backgroundColor: '#F4B940',
  },
  textStyle: {
    fontWeight: '900',
  },
});

// const boxStyle = {
//   height: 120,
//   backgroundColor: '#F4B940',
//   borderRadius: 10,
//   margin: 10,
//   alignItems: 'center',
//   justifyContent: 'center',
// };
