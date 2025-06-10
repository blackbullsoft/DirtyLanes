import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../../utils/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {images} from '../../../assests/image';
import {navigate, resetAndNavigate} from '../../../utils/NavigationUtil';
import CustomStatusBar from '../../../components/CustomStatusBar';
import InsetShadow from 'react-native-inset-shadow';
import {fontFamilies} from '../../../utils/font';

const SplashScren = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      resetAndNavigate('WelcomeScreen');
    }, 1200);

    // Cleanup function
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar backColor="#000000" />
      <LinearGradient
        colors={['#000000', '#000000', '#EF0038']}
        style={styles.linearGradient}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image source={images.logo} style={styles.image} />
          <Text style={styles.websiteText}>www.dirtylanes.co.uk</Text>
          <Image source={images.TheHeartLogo} />
        </View>
        <View style={styles.blackbullBackgroud}>
          <Text style={styles.blackbull}>Powered by Blackbull Technosoft</Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SplashScren;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: 328,
    height: 50,
    // resizeMode: 'contain',
  },
  blackbull: {
    color: Colors.white,
    fontFamily: fontFamilies.PoppinsLight,
    fontSize: RFValue(12),

    // justifyContent: '',
  },
  blackbullBackgroud: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: Colors.backgroundBlackColor,
    paddingVertical: 3,
    textAlign: 'center',
    paddingHorizontal: 10,
    borderRadius: 3,
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  websiteText: {
    color: Colors.MistyRose,
    fontFamily: fontFamilies.PoppinsLight,
    fontSize: RFValue(12),
    marginVertical: 12,
    marginBottom: 20,
  },
});
