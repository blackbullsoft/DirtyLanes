import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../utils/Colors';
import {goBack} from '../../utils/NavigationUtil';

const BackButton = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        goBack();
      }}>
      <Icon name="arrowleft" size={22} color={Colors.redDark} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    width: 41,
    height: 41,
    borderWidth: 1,
    borderColor: Colors.borderGrey,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: Colors.white,
  },
});
