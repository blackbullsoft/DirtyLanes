import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../utils/Colors';
import {windowHeight} from '../utils/Constant';
import Icon from 'react-native-vector-icons/Ionicons';
import {fontFamilies} from '../utils/font';
import {RFValue} from 'react-native-responsive-fontsize';

const TabIcon = ({
  source,
  focused,
  routeName,
}: {
  source: any;
  focused: boolean;
  routeName: string;
}) => {
  return (
    <View
      style={{
        // marginBottom: 30,
        position: 'absolute',
        top: -50,
      }}>
      <View
        style={[
          focused ? styles.activeIconBackground : styles.inActiveIconBackground,
        ]}>
        <Icon
          name={source}
          size={32}
          color={focused ? Colors.white : Colors.tabGrey}
        />
      </View>

      {focused && <Text style={styles.iconName}>{routeName}</Text>}
    </View>
  );
};
export default TabIcon;

const styles = StyleSheet.create({
  iconContainer: {
    padding: 18,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIconBackground: {
    backgroundColor: Colors.redDark,

    // marginBottom: windowHeight * 10,
    // paddingBottom: 10,
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inActiveIconBackground: {
    // width: 70,
    marginTop: windowHeight * 60,
    height: 70,
    // backgroundColor: 'white',
  },

  iconName: {
    fontFamily: fontFamilies.PoppinsLight,
    fontSize: RFValue(10),
    color: Colors.white,
    textAlign: 'center',
  },
});
