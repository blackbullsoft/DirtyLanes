import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {images} from '../../assests/image';
import {windowHeight} from '../../utils/Constant';
import {Colors} from '../../utils/Colors';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontFamilies} from '../../utils/font';
import {RFValue} from 'react-native-responsive-fontsize';
import VerticalLine from '../Ui/VerticalLine';
import {navigate} from '../../utils/NavigationUtil';

const CustomDrawerContent = (props: any) => (
  <DrawerContentScrollView
    {...props}
    contentContainerStyle={{backgroundColor: Colors.white}}>
    <View style={styles.logoContainer}>
      <TouchableOpacity
        onPress={() => {
          navigate('EditProfile');
        }}
        style={{
          position: 'absolute',
          zIndex: 10,
          top: 0,
          right: 10,
        }}>
        <Icon name={'edit'} size={27} color={Colors.black} />
      </TouchableOpacity>
      {/* <View style={styles.imageContainer}> */}

      {/* </View> */}

      <View
        style={{
          marginTop: 35,
        }}>
        <Image
          source={images.ProfilePic} // replace with your logo path
          style={[
            styles.logo,
            {
              borderRadius: 70,
              borderWidth: 4.5,
              borderColor: Colors.redDark,
            },
          ]}
          resizeMode="center"
        />
        <View
          style={{
            position: 'absolute',
            right: 0,
            bottom: 19,
          }}>
          <MaterialCommunityIcons
            name="checkbox-blank-circle"
            size={25}
            color={Colors.greenOnline}
          />
        </View>
      </View>

      <View
        style={{
          alignItems: 'center',
        }}>
        <Text style={styles.BoldText}>Manager</Text>
        <Text style={styles.simpleText}>62, United Kingdom</Text>
        <Text style={styles.simpleText}>Test</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: Colors.white,
          // alignItems: 'center',
          // width: '90%',
          height: 40,
          justifyContent: 'center',
          // paddingVertical: 7,
          marginTop: 20,
          borderWidth: 1,
          borderColor: Colors.darkGrey2,
        }}>
        <View style={styles.activeButton}>
          <Ionicons name={'person'} size={22} color={Colors.white} />
        </View>
        <VerticalLine />

        <View style={styles.nonActiveButton}>
          <Ionicons name={'eye-sharp'} size={22} color={Colors.darkGrey2} />
        </View>
        <VerticalLine />

        <View style={styles.nonActiveButton}>
          <Icon name={'bell'} size={22} color={Colors.darkGrey2} />
        </View>
      </View>
    </View>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);

export default CustomDrawerContent;

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: windowHeight * 20,
    borderRadius: 50,
    // height: windowHeight * 350,
  },
  imageContainer: {
    borderWidth: 5,
    borderColor: Colors.redDark,
    borderRadius: 100,
    height: windowHeight * 250,
    width: windowHeight * 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
    overflow: 'hidden',
  },
  logo: {
    // width: windowHeight * 152,
    // height: windowHeight * 152,
    width: 132,
    height: 132,
  },
  BoldText: {
    fontFamily: fontFamilies.PoppinsRegular,
    fontSize: RFValue(20),
    color: Colors.black,
  },
  simpleText: {
    fontFamily: fontFamilies.PoppinsRegular,
    fontSize: RFValue(12),
    color: Colors.textColor,
  },
  activeButton: {
    paddingHorizontal: 24,
    backgroundColor: Colors.black,
    justifyContent: 'center',
  },
  nonActiveButton: {
    paddingHorizontal: 24,
    backgroundColor: Colors.white,
    justifyContent: 'center',
  },
});
