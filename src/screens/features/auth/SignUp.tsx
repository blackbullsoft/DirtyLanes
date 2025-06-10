import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../../utils/Colors';
import {images} from '../../../assests/image';
import {CustomInput} from '../../../components/Ui/CustomInput';
import InsetShadow from 'react-native-inset-shadow';
import {fontFamilies} from '../../../utils/font';
import {RFValue} from 'react-native-responsive-fontsize';
import ButtonComponent from '../../../components/Ui/ButtonComponent';
import {Gender, windowHeight, windowWidth} from '../../../utils/Constant';
import CustomStatusBar from '../../../components/CustomStatusBar';
import BackButton from '../../../components/Ui/BackButton';
import withGradientBackground from '../../../components/Ui/withGradientBackground';

const SignUp = () => {
  const handleOnPress = () => {};
  const [gender, setGender] = useState('female');
  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar backColor={Colors.white} />

      <ScrollView
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 30,
        }}>
        <View style={styles.subContainer}>
          <View style={styles.backLogo}>
            <BackButton />
          </View>
          <View
            style={{
              marginBottom: 20,
              alignItems: 'center',
            }}>
            {/* <Image source={images.heartLogo} style={styles.image} /> */}
            <Image source={images.Register} style={styles.welcomeLogo} />
          </View>
          <View>
            <CustomInput
              placeholder="username"
              heading="UserName"
              right={false}
            />

            <CustomInput
              placeholder="Enter First Name"
              heading="First Name"
              right={false}
            />
            <CustomInput
              placeholder="Enter Last Name"
              heading="Last Name"
              right={false}
            />

            <CustomInput
              placeholder="Enter Email"
              heading="Email"
              right={false}
            />

            <CustomInput
              placeholder="Enter Confirm Email"
              heading="Confirm Email"
              right={false}
            />

            <CustomInput
              placeholder="Enter DOB"
              heading="Date of birth"
              right={false}
              calendar={true}
            />
            <View
              style={[
                styles.flexRow,
                {
                  marginVertical: 12,
                  backgroundColor: Colors.white,
                },
              ]}>
              <View style={styles.inputContainer}>
                <View style={styles.topHeading}>
                  <Text style={styles.borderText}>Gender</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginVertical: windowHeight * 10,
                  }}>
                  {/* ====== Female Select Desgin ====== */}

                  <View
                    style={[
                      styles.ImageBorder,
                      {
                        borderColor:
                          gender == 'female' ? Colors.redborder : Colors.border,
                      },
                    ]}>
                    <TouchableOpacity
                      onPress={() => {
                        setGender('female');
                      }}>
                      <Image source={images.Women} style={styles.GenderImage} />
                    </TouchableOpacity>
                    {gender == 'female' && (
                      <View style={styles.check}>
                        <Image
                          source={images.check}
                          style={{
                            width: 32,
                            height: 32,
                          }}
                        />
                      </View>
                    )}
                  </View>
                  {/* ====== male Select Desgin ====== */}

                  <View
                    style={[
                      styles.ImageBorder,
                      {
                        borderColor:
                          gender == 'male' ? Colors.redborder : Colors.border,
                      },
                    ]}>
                    <TouchableOpacity
                      onPress={() => {
                        setGender('male');
                      }}>
                      <Image source={images.Men} style={styles.GenderImage} />
                    </TouchableOpacity>
                    {gender == 'male' && (
                      <View style={styles.check}>
                        <Image
                          source={images.check}
                          style={{
                            width: 32,
                            height: 32,
                          }}
                        />
                      </View>
                    )}
                  </View>
                </View>
              </View>
            </View>

            <ButtonComponent
              name="Register"
              onPress={handleOnPress}
              theme={true}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default withGradientBackground(SignUp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    marginHorizontal: windowWidth * 60,
  },
  image: {
    width: 328,
    height: 37,
    resizeMode: 'contain',
  },
  ImageBorder: {
    borderWidth: 3,
    borderColor: Colors.redborder,
    borderRadius: 70,
    padding: 3,
    marginBottom: windowHeight * 30,

    backgroundColor: 'white',
  },
  GenderImage: {
    width: windowWidth * 350,
    height: windowWidth * 350,
    borderRadius: 60,
  },
  welcomeLogo: {
    width: 115,
    height: 37,
    marginTop: windowHeight * 30,
  },
  backLogo: {
    width: 32,
    height: 32,
    paddingTop: 15,
    // marginLeft: windowWidth * 70,
  },
  Remember: {
    fontFamily: fontFamilies.PoppinsRegular,
    color: Colors.darkGrey,
    fontSize: RFValue(12),
    marginLeft: 4,
  },
  ForgotText: {
    fontFamily: fontFamilies.PoppinsBold,
    color: Colors.cadiumRed,
    fontSize: RFValue(12),
    marginLeft: 4,
  },
  icon: {
    marginRight: 5,
  },
  borderText: {
    fontFamily: fontFamilies.PoppinsRegular,
    fontSize: RFValue(13),
    color: Colors.black,
  },
  check: {
    position: 'absolute',
    zIndex: 10,
    bottom: 0,
    right: 0,
  },
  topHeading: {
    position: 'absolute',
    top: '-5%',
    left: 20,
    backgroundColor: Colors.white,
    zIndex: 10,
    paddingHorizontal: 4,
  },
  flexRow: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    marginTop: 25,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowColor: Colors.border,
    borderColor: Colors.black,
    elevation: 5,
    zIndex: -10,
  },
  inputContainer: {
    width: '100%',
    fontFamily: fontFamilies.PoppinsRegular,
    fontSize: RFValue(16),
    padding: 13,
    color: Colors.black,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 24,
  },
});
