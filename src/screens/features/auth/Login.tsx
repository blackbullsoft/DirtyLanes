import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../../utils/Colors';
import {images} from '../../../assests/image';
import {CustomInput} from '../../../components/Ui/CustomInput';
import Icon from 'react-native-vector-icons/Ionicons';
import {fontFamilies} from '../../../utils/font';
import {RFValue} from 'react-native-responsive-fontsize';
import ButtonComponent from '../../../components/Ui/ButtonComponent';
import {windowHeight} from '../../../utils/Constant';
import {navigate} from '../../../utils/NavigationUtil';
import withGradientBackground from '../../../components/Ui/withGradientBackground';

const Login = ({navigation}) => {
  const [check, setCheck] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  const handleInput = (name: string, value: string) => {
    setData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleValidation = () => {
    console.log('Handle', Object.keys(data).length);
    navigation.replace('MainApp');
    // navigate('MainApp');

    if (
      Object.keys(data).length == 0 ||
      data?.userName?.length == 0 ||
      !data?.userName ||
      data?.userName == undefined
    ) {
      setError(prev => ({
        ...prev,
        ['userName']: 'User name required',
      }));
    }
    if (
      Object.keys(data).length == 0 ||
      data?.password?.length == 0 ||
      !data?.password ||
      data?.password == undefined
    ) {
      setError(prev => ({
        ...prev,
        ['password']: 'Password required',
      }));
    } else {
      console.log('Good');
      navigate('Dashboard');
    }
  };
  console.log('Data', data);
  const handleOnPress = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View
          style={{
            marginBottom: 20,
            alignItems: 'center',
          }}>
          {/* <Image source={images.heartLogo} style={styles.image} /> */}
          <Image source={images.TheHeartLogo} />

          <Image source={images.welcomeBack} style={styles.welcomeLogo} />
        </View>
        <View
          style={{
            marginHorizontal: 20,
          }}>
          <CustomInput
            placeholder="example@gmail.com"
            heading="UserName"
            right={false}
            onChangeText={e => {
              handleInput('userName', e);
            }}
          />
          {error?.userName && (
            <View>
              <Text style={styles.errorText}>{error?.userName}</Text>
            </View>
          )}

          <CustomInput
            placeholder="Enter your password"
            heading="Password"
            right={true}
            passwordField={true}
            onChangeText={e => {
              handleInput('password', e);
            }}
          />
          {error?.password && (
            <View>
              <Text style={styles.errorText}>{error?.password}</Text>
            </View>
          )}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 15,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                //   alignItems: 'center',
              }}
              onPress={() => {
                setCheck(!check);
              }}>
              {check ? (
                <Icon name="checkbox" size={20} color={Colors.cadiumRed} />
              ) : (
                <Icon name="checkbox-outline" size={20} color={Colors.black} />
              )}
              <Text style={styles.Remember}>Remember me</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigate('ForgotPassword');
              }}>
              <Text style={styles.ForgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <ButtonComponent
            name="Login"
            onPress={handleValidation}
            theme={true}
          />
        </View>
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
    </SafeAreaView>
  );
};

export default withGradientBackground(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 10,
  },
  image: {
    width: 328,
    height: 37,
    resizeMode: 'contain',
  },
  welcomeLogo: {
    width: 258,
    height: 37,
    marginTop: windowHeight * 10,
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
  errorText: {
    fontFamily: fontFamilies.PoppinsMedium,
    fontSize: RFValue(12),
    color: Colors.red,
    marginLeft: 10,
  },

  createTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
    position: 'absolute',
    bottom: 20,
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
