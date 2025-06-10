import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/Colors';

const VerticalLine = () => {
  return (
    <View
      style={{
        height: 45,
        width: 1,
        backgroundColor: Colors.darkGrey2,
        // marginHorizontal: 10,
      }}
    />
  );
};

export default VerticalLine;

const styles = StyleSheet.create({});
