import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {Colors} from '../../utils/Colors';
import {fontFamilies} from '../../utils/font';
import {RFValue} from 'react-native-responsive-fontsize';
import {images} from '../../assests/image';
import {windowHeight} from '../../utils/Constant';
import {navigate, openTheDrawer} from '../../utils/NavigationUtil';
import Filter from '../../screens/Dashboard/Filter';
import {useFilter} from '../../context/FilterContext';
import BackButton from './BackButton';

interface HeaderProps {
  heading?: boolean;
}
const Header: FC<HeaderProps> = ({heading}) => {
  const {visible, toggle} = useFilter();

  console.log('visible', visible);
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            margin: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: !heading ? 10 : 0,
            }}>
            {/* ======= Text Design ======= */}
            {heading && (
              <TouchableOpacity
                onPress={() => openTheDrawer()}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image source={images.Profile} style={styles.image} />
                <View
                  style={{
                    marginLeft: 7,
                  }}>
                  <Text style={styles.nameText}>Pooja Sharma</Text>
                  <Text style={styles.welcomeTExt}>Welcome Back</Text>
                </View>
              </TouchableOpacity>
            )}

            {!heading && (
              <View
                style={{
                  // paddingHorizontal: 20,
                  // paddingTop: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <BackButton />
                <Text
                  style={{
                    fontFamily: fontFamilies.PoppinsSemiBold,
                    color: Colors.white,
                    fontSize: RFValue(20),
                    marginLeft: 15,
                  }}>
                  Search Result
                </Text>
              </View>
            )}

            {/* ==== Bell Icons ======= */}

            <View style={styles.belloutisde}>
              <Image source={images.bell} style={styles.bell} />
            </View>
          </View>

          {/* ========== Search Bar Design =========== */}
          <View
            style={[
              styles.inputFieldContainer,
              {
                borderRadius: 50,
                borderTopRightRadius: visible ? 30 : undefined,
                borderBottomRightRadius: visible ? 0 : undefined,
              },
            ]}>
            <Image source={images.glass} style={styles.glass} />
            <TextInput
              style={{
                width: '75%',
                fontFamily: fontFamilies.PoppinsRegular,
                fontSize: RFValue(14),
              }}
              placeholder="Search for Partner"
              onFocus={() => {
                navigate('SearchList');
              }}
            />
            <TouchableOpacity onPress={toggle}>
              <Image source={images.Filter} style={styles.mic} />
            </TouchableOpacity>

            {/* <Filter /> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.redDark,
    margin: 0,
  },
  nameText: {
    fontFamily: fontFamilies.PoppinsMedium,
    fontSize: RFValue(16),
    color: Colors.white,
  },
  welcomeTExt: {
    fontFamily: fontFamilies.PoppinsRegular,
    fontSize: RFValue(12),
    color: Colors.white,
    marginTop: -7,
  },
  image: {
    width: 36,
    borderWidth: 2.5,
    borderColor: Colors.white,
    height: 36,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
  },
  belloutisde: {
    width: 40,
    height: 40,
    backgroundColor: Colors.white,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bell: {
    width: 20,
    height: 22,
  },
  inputFieldContainer: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderRadius: 50,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 0,
    marginTop: windowHeight * 20,
  },
  glass: {
    width: 24,
    height: 25,
    marginHorizontal: 11,
  },
  mic: {
    width: 24,
    height: 24,
  },
});
