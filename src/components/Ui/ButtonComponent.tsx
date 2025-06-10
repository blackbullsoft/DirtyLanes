import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {Colors} from '../../utils/Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';
import {fontFamilies} from '../../utils/font';

interface button {
  name: string;
  onPress: () => void;
  theme: boolean;
}
const ButtonComponent: FC<button> = ({name, onPress, theme}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      {theme ? (
        <LinearGradient
          style={styles.container}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#EF0038', '#D00030']}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text style={styles.TitleText}>{name}</Text>
          </View>
        </LinearGradient>
      ) : (
        <View
          style={[
            styles.container,
            {
              backgroundColor: theme ? Colors.cadiumRed : Colors.black,
            },
          ]}>
          <Text style={styles.TitleText}>{name}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 5,
  },
  TitleText: {
    color: Colors.white,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: RFValue(13.5),
    fontFamily: fontFamilies.PoppinsBold,
  },
});
