import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-deck-swiper';
import {images} from '../../assests/image';
import {Colors} from '../../utils/Colors';
import withGradientBackground from './withGradientBackground';
import {fontFamilies} from '../../utils/font';
import {RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';

const TinderSwiper = () => {
  const card = [];
  const {height, width, scale, fontScale} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Swiper
        cards={[
          images.tinderGirl,
          images.tinderGirl,
          images.tinderGirl,
          images.tinderGirl,
          images.tinderGirl,
          images.tinderGirl,
          images.tinderGirl,
        ]}
        renderCard={card => {
          return (
            <View>
              <ImageBackground
                source={card}
                resizeMode="cover"
                imageStyle={{
                  borderBottomLeftRadius: 50,
                  borderBottomRightRadius: 50,
                }}
                style={{
                  width: '100%',
                  height: '99%',
                }}>
                <LinearGradient
                  colors={[
                    'transparent',
                    'transparent',
                    '#00000000',
                    '#222222',
                  ]}
                  style={styles.gradient}>
                  <View
                    style={{
                      //   zIndex: 100,
                      position: 'absolute',
                      // textAlign: 'center',
                      //   alignItems: 'center',
                      alignSelf: 'center',
                      bottom: 10,
                      // marginVertical: 10,
                      // maxWidth: '0%',
                      width: '70%',
                    }}>
                    <Text style={styles.userName}>Roselee60g</Text>
                    <Text style={styles.describe}>
                      33 year old Woman from Tahoe City, California, United
                      States{' '}
                    </Text>
                  </View>
                </LinearGradient>
              </ImageBackground>
            </View>
          );
        }}
        cardVerticalMargin={0}
        cardHorizontalMargin={0}
        cardStyle={{
          paddingBottom: height * 0.11,
        }}
        onSwiped={cardIndex => {
          console.log(cardIndex);
        }}
        onSwipedAll={() => {
          console.log('onSwipedAll');
        }}
        cardIndex={0}
        backgroundColor={Colors.white}
        stackSize={3}
        infinite={true}
      />
      <View
        style={{
          position: 'absolute',
          zIndex: 100000,
          top: height * 0.91,
          //   backgroundColor: 'black',
          alignSelf: 'center',
          //   bottom: 10,
          width: '77%',
          //   justifyContent: 'space-evenly',
          //   flexDirection: 'column',
          //   marginVertical: 20,
        }}>
        <View style={styles.iconContainer}>
          <View style={styles.smallContainer}>
            <Image
              source={images.Plus}
              style={styles.iconImage}
              resizeMode="contain"
              tintColor={Colors.redDark}
            />
          </View>

          <View style={styles.smallContainer}>
            <Image
              source={images.heart}
              style={styles.iconImage}
              tintColor={Colors.redDark}
              resizeMode="contain"
            />
          </View>

          <View style={styles.smallContainer}>
            <Image
              source={images.cross}
              style={styles.iconImage}
              resizeMode="contain"
            />
          </View>

          <View style={styles.smallContainer}>
            <Image
              source={images.Smile}
              style={styles.iconImage}
              resizeMode="contain"
              tintColor={Colors.redDark}
            />
          </View>

          <View style={styles.smallContainer}>
            <Image
              source={images.gift}
              style={styles.iconImage}
              resizeMode="contain"
              tintColor={Colors.redDark}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default withGradientBackground(TinderSwiper);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white',
  },
  card: {
    flex: 1,
    // borderRadius: 4,
    // borderWidth: 2,
    // borderColor: '#E8E8E8',
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
  smallContainer: {
    backgroundColor: Colors.white,
    padding: 14,
    borderRadius: 50,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // width: '100%',
    flex: 1,
    // marginLeft: 10,
  },
  iconImage: {
    width: 26,
    height: 26,
    borderRadius: 10,
    // padding: 20,
  },

  userName: {
    fontFamily: fontFamilies.PoppinsSemiBold,
    fontSize: RFValue(36),
    color: Colors.white,
    textAlign: 'center',
  },
  describe: {
    fontFamily: fontFamilies.PoppinsLight,
    fontSize: RFValue(13),
    color: Colors.white,
    textAlign: 'center',
  },
  gradient: {
    flex: 1,
    // padding: 20,
    zIndex: 1000000,
    height: 10,
    // position: 'absolute',
    // bottom: 10,
    borderRadius: 40,
  },
});
