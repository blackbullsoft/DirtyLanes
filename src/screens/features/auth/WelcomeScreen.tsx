import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../../utils/Colors';
import {images} from '../../../assests/image';
import {RFValue} from 'react-native-responsive-fontsize';
import ButtonComponent from '../../../components/Ui/ButtonComponent';
import {fontFamilies} from '../../../utils/font';
import {navigate} from '../../../utils/NavigationUtil';
import withBottomGradient from '../../../components/Ui/withGradientBackground';
import CustomStatusBar from '../../../components/CustomStatusBar';
import {responsive_factor, windowDimension} from '../../../utils/Constant';

const WelcomeScreen = () => {
  const {height, width, scale, fontScale} = useWindowDimensions();
  const handleOnPress = () => {
    console.log('Handle On Press');
    navigate('Login');
  };
  const handleSignup = () => {
    console.log('Handle On Press');
    navigate('SignUp');
  };
  const styles = getStyles(width, height);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView bounces={false} overScrollMode="never">
        {/* <CustomStatusBar backColor="grey" /> */}

        <View style={styles.innerContainer}>
          <Image source={images.WelcomeLogo} style={styles.image} />

          <View style={styles.contentContainer}>
            <View style={{alignItems: 'center'}}>
              <Image source={images.heading} style={styles.heading} />
            </View>

            <Text style={styles.subText}>
              Join thousands who've found love! Our personalized matching makes
              your perfect partner just a swipe away. Sign up now and start
              connecting!
            </Text>

            <ButtonComponent
              name="Sign Up"
              onPress={handleSignup}
              theme={true}
            />
            <ButtonComponent
              name="Login"
              onPress={handleOnPress}
              theme={false}
            />

            <View style={styles.createTextContainer}>
              <Text style={styles.creatText}>Don't Have An Account? </Text>
              <TouchableOpacity onPress={() => navigate('SignUp')}>
                <Text style={styles.boldCreateText}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default withBottomGradient(WelcomeScreen);
const getStyles = (width: number, height: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    innerContainer: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    image: {
      width: width,
      height: height * 0.53,
      borderBottomLeftRadius: 100,
      borderBottomRightRadius: 100,
      resizeMode: 'cover',
      // backgroundColor: 'red',
    },
    contentContainer: {
      width: '100%',
      paddingHorizontal: 25,
      paddingBottom: 30,
      marginTop: 10,
    },
    heading: {
      width: responsive_factor * 252,
      height: responsive_factor * 37,
      marginVertical: 10,
    },
    subText: {
      marginTop: 10,
      fontSize: RFValue(14),
      color: Colors.darkGrey,
      textAlign: 'center',
      marginBottom: 25,
      fontFamily: fontFamilies.PoppinsRegular,
    },
    createTextContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 20,
    },
    creatText: {
      fontSize: RFValue(12),
      color: Colors.darkGrey,
      fontFamily: fontFamilies.PoppinsRegular,
    },
    boldCreateText: {
      fontSize: RFValue(13),
      color: Colors.cadiumRed,
      fontFamily: fontFamilies.PoppinsBold,
      textDecorationLine: 'underline',
    },
  });
