import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {
  responsive_factor,
  windowHeight,
  windowWidth,
} from '../../../utils/Constant';
import BackButton from '../../../components/Ui/BackButton';

import {images} from '../../../assests/image';
import {Colors} from '../../../utils/Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import {fontFamilies} from '../../../utils/font';
import {CustomInput} from '../../../components/Ui/CustomInput';
import withGradientBackground from '../../../components/Ui/withGradientBackground';
import ButtonComponent from '../../../components/Ui/ButtonComponent';

const ForgotPassword = () => {
  const handleOnPress = () => {};

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ScrollView
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 30,
        }}
        bounces={false}
        overScrollMode="never">
        <View style={styles.subContainer}>
          <View style={styles.backLogo}>
            <BackButton />
          </View>
          <View
            style={{
              marginBottom: 20,
              alignItems: 'center',
              marginTop: responsive_factor * 30,
            }}>
            {/* <Image source={images.heartLogo} style={styles.image} /> */}
            <Image
              source={images.ForgotPassword}
              style={styles.welcomeLogo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.ForgotText}>
            Please Enter Your Username Or Email Address.{'\n'} You Will Receive
            a Link To Create A New Password Via Email.
          </Text>
          <CustomInput
            placeholder="user@gmail.com"
            heading="Email"
            right={false}
          />
          <View
            style={{
              marginTop: windowHeight * 100,
            }}>
            <ButtonComponent
              name="Get Password"
              onPress={handleOnPress}
              theme={true}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default withGradientBackground(ForgotPassword);

const styles = StyleSheet.create({
  subContainer: {
    marginHorizontal: windowWidth * 60,
  },
  backLogo: {
    width: 32,
    height: 32,
    paddingTop: 15,
  },
  welcomeLogo: {
    width: responsive_factor * 300,
    height: windowHeight * 55,
    marginTop: windowHeight * 30,
  },
  ForgotText: {
    color: Colors.textColor,
    fontSize: RFValue(10),
    textAlign: 'center',
    fontFamily: fontFamilies.PoppinsLight,
  },
});
