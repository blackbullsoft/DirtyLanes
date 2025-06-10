import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
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

const WelcomeScreen = () => {
  const handleOnPress = () => {
    console.log('Handle On Press');
    navigate('Login');
  };
  const handleSignup = () => {
    console.log('Handle On Press');
    navigate('SignUp');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{
          flex: 1,
        }}>
        <View>
          <Image source={images.WelcomeLogo} style={styles.image} />
          <View
            style={{
              padding: 25,
              paddingTop: 20,
              marginHorizontal: 11,
            }}>
            <View
              style={{
                alignItems: 'center',
              }}>
              <Image source={images.heading} style={styles.heading} />
            </View>

            <Text style={styles.subText}>
              Join Thousands Who've Found Love! Our Personalized Matching Makes
              Your {`\n`} Perfect Partner Just A Swipe Away. Sign{`\n`} Up Now
              And Start Connecting!
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
              <TouchableOpacity
                onPress={() => {
                  navigate('SignUp');
                }}>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '65%',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    resizeMode: 'cover',
  },
  linearGradient: {
    flex: 1,
    height: '10%',
  },
  heading: {
    width: 252,
    height: 37,
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
    // fontWeight: '700',
    fontFamily: fontFamilies.PoppinsBold,
    textDecorationLine: 'underline',
  },
});
