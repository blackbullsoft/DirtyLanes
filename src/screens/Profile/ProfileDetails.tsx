import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../../assests/image';
import {Colors} from '../../utils/Colors';
import BackButton from '../../components/Ui/BackButton';
import {fontFamilies} from '../../utils/font';
import {RFValue} from 'react-native-responsive-fontsize';
import withGradientBackground from '../../components/Ui/withGradientBackground';
import {CustomInput} from '../../components/Ui/CustomInput';
import UploadButton from '../../components/Ui/UploadButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {DATA, RateList} from '../../utils/Constant';
import CustomStatusBar from '../../components/CustomStatusBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import TinderSwiper from '../../components/Ui/TinderSwiper';

const ProfileDetails = () => {
  const [ratingKey, setRatingKey] = useState<number>();
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <CustomStatusBar backColor={Colors.redDark} />

      <ScrollView bounces={false} overScrollMode="never">
        <View style={styles.headerContainer}>
          <View
            style={{
              paddingHorizontal: 20,
              paddingTop: 20,
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
              Back
            </Text>
          </View>

          <View>
            <Image
              source={images.ProfileDetails} // replace with your logo path
              style={[styles.profileImage]}
              resizeMode="center"
            />
            <View
              style={{
                width: 69,
                height: 69,
                backgroundColor: Colors.white,
                borderRadius: 50,
                // alignItems: 'center',
                // marginLeft: 10,
                // justifyContent: 'center',
                position: 'absolute',
                right: 80,
                bottom: 12,
              }}>
              <View
                style={{
                  //   marginLeft: 9,
                  marginRight: 10,
                  alignItems: 'center',
                  marginTop: 3,
                }}>
                <Image
                  source={images.Zodiac} // replace with your logo path
                  style={{
                    width: 40,
                    height: 45,
                  }}
                  resizeMode="cover"
                />
                <Text
                  style={{
                    fontFamily: fontFamilies.PoppinsSemiBold,
                    fontSize: RFValue(8),
                    color: Colors.black,
                  }}>
                  Zodiac
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            // padding: /20,
            paddingHorizontal: 30,
            marginTop: 80,
            // alignItems: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text style={styles.userName}>Roselee60g</Text>

            <View style={styles.iconContainer}>
              <View style={styles.smallContainer}>
                <Image
                  source={images.Plus}
                  style={styles.iconImage}
                  resizeMode="contain"
                  tintColor={Colors.iconGrey}
                />
              </View>

              <View style={styles.smallContainer}>
                <Image
                  source={images.heart}
                  style={styles.iconImage}
                  tintColor={Colors.iconGrey}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.smallContainer}>
                <Image
                  source={images.Smile}
                  style={styles.iconImage}
                  resizeMode="contain"
                  tintColor={Colors.iconGrey}
                />
              </View>

              <View style={styles.smallContainer}>
                <Image
                  source={images.gift}
                  style={[
                    styles.iconImage,
                    {
                      width: 19,
                      height: 20,
                    },
                  ]}
                  resizeMode="contain"
                  tintColor={Colors.iconGrey}
                />
              </View>

              <View style={styles.smallContainer}>
                <Text style={styles.blockUserText}>Block Users</Text>
              </View>
            </View>
          </View>

          <View style={styles.subContainer}>
            <Text style={styles.heading}>I Am : </Text>
            <Text style={styles.subHeading}>Women </Text>
          </View>

          <View style={styles.subContainer}>
            <Text style={styles.heading}>Seeking A : </Text>
            <Text style={styles.subHeading}>Men </Text>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.heading}>Age : </Text>
            <Text style={styles.subHeading}>33 </Text>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.heading}>Country : </Text>
            <Text style={styles.subHeading}>United States </Text>
          </View>

          <View style={styles.subContainer}>
            <Text style={styles.heading}>State : </Text>
            <Text style={styles.subHeading}>Califonia </Text>
          </View>

          <View style={styles.subContainer}>
            <Text style={styles.heading}>City : </Text>
            <Text style={styles.subHeading}>Tahoe City </Text>
          </View>
          <Text
            style={[
              styles.userName,
              {
                fontSize: RFValue(16),
                marginVertical: 20,
              },
            ]}>
            Roselee60g other details
          </Text>
          <View style={styles.ratingContainer}>
            <Text
              style={[
                styles.userName,
                {
                  fontSize: RFValue(16),
                  // marginVertical: 10,
                  marginTop: 9,
                },
              ]}>
              Comments
            </Text>
            <CustomInput
              placeholder="Add Comment: "
              right={false}
              showHeading={false}
              containerStyle={{
                marginTop: 3,
              }}
              inputStyle={{
                backgroundColor: Colors.inptBackGrey,
              }}
            />
            <UploadButton
              text="Add"
              color="white"
              backgroundColor={Colors.redDark}
              containerStyle={{
                marginTop: 10,
                marginBottom: 15,
                paddingHorizontal: 50,
              }}
            />
          </View>

          <View style={styles.ratingContainer}>
            <Text
              style={[
                styles.userName,
                {
                  fontSize: RFValue(16),
                  // marginVertical: 10,
                  marginTop: 9,
                },
              ]}>
              Virtual Gifts
            </Text>

            <Text style={styles.rateSimpleText}>Rate Profile</Text>
            <View style={styles.horizontalLine} />

            <View style={styles.subRatingContainer}>
              <View>
                <Text
                  style={[
                    styles.rateSimpleText,
                    {
                      fontFamily: fontFamilies.PoppinsRegular,
                    },
                  ]}>
                  Rating
                </Text>
                <View style={styles.horizontalLine} />
              </View>

              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginRight: 10,
                    }}>
                    <Text style={styles.averageText}>Average Score</Text>

                    <Text style={styles.scoreText}>0</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.averageText}>Votes</Text>

                    <Text style={styles.scoreText}>0</Text>
                  </View>
                </View>
                <View style={styles.horizontalLine} />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
                marginTop: 20,
                // justifyContent: 'center',
              }}>
              <Image
                source={images.sadFace} // replace with your logo path
                style={{
                  width: 21,
                  height: 21,
                  marginRight: 10,
                }}
                resizeMode="cover"
              />
              {RateList?.map((data, key, index) => (
                <TouchableOpacity
                  key={key}
                  onPress={() => {
                    console.log('Key', key);
                    setRatingKey(key);
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <FontAwesome
                      name="circle"
                      size={RFValue(19)}
                      color={
                        (ratingKey ?? -1) < key ? Colors.dotGrey : Colors.black
                      }
                    />

                    <Text style={styles.ratingNumber}>{key + 1}</Text>
                  </View>
                </TouchableOpacity>
              ))}
              <Image
                source={images.sadFace} // replace with your logo path
                style={{
                  width: 21,
                  height: 21,
                  marginRight: 10,
                }}
                resizeMode="cover"
              />
            </View>

            <UploadButton
              text="Rate"
              color="white"
              backgroundColor={Colors.black}
              containerStyle={{
                marginTop: 10,
                marginBottom: 15,
                paddingHorizontal: 50,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default withGradientBackground(ProfileDetails);

const styles = StyleSheet.create({
  theContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // or 'space-between' if needed
  },
  headerContainer: {
    backgroundColor: Colors.redDark,
    height: 150,
    position: 'relative', // Key!
  },
  profileImage: {
    width: 170,
    height: 170,
    borderRadius: 100,
    borderWidth: 6,
    borderColor: Colors.white,
    alignSelf: 'center',
    backgroundColor: Colors.black,
  },
  userName: {
    fontFamily: fontFamilies.PoppinsSemiBold,
    fontSize: RFValue(20),
    color: Colors.black,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '72%',
  },
  iconImage: {
    width: 18,
    height: 18,
  },
  smallContainer: {
    backgroundColor: Colors.redLight,
    padding: 7,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blockUserText: {
    fontFamily: fontFamilies.PoppinsSemiBold,
    fontSize: RFValue(12),
    color: Colors.redDark,
  },
  subContainer: {
    backgroundColor: Colors.inptBackGrey,
    borderRadius: 50,
    borderColor: Colors.border,
    borderWidth: 2,
    flexDirection: 'row',
    // width: '94%',
    marginTop: 20,
  },
  heading: {
    fontFamily: fontFamilies.PoppinsSemiBold,
    fontSize: RFValue(13),
    color: Colors.black,
    padding: 12,
    paddingRight: 1,
  },
  subHeading: {
    fontFamily: fontFamilies.PoppinsSemiBold,
    fontSize: RFValue(13),
    color: Colors.textColor,
    padding: 12,
    paddingLeft: 0,
  },
  rateSimpleText: {
    fontFamily: fontFamilies.PoppinsSemiBold,
    fontSize: RFValue(12),
    color: Colors.textGrey,
  },
  horizontalLine: {
    borderColor: Colors.backGrey,
    borderWidth: 1,
    width: '100%',
    marginVertical: 8,
  },
  ratingContainer: {
    borderWidth: 1,
    borderColor: Colors.backGrey,
    borderRadius: 8,
    // padding: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  subRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  averageText: {
    fontFamily: fontFamilies.PoppinsRegular,
    marginRight: 6,
    fontSize: RFValue(12),
    color: Colors.textGrey,
  },
  scoreText: {
    fontFamily: fontFamilies.PoppinsSemiBold,
    marginRight: 6,
    fontSize: RFValue(12),
    color: Colors.black,
  },
  smileImage: {
    width: 20,
    height: 20,
  },
  ratingNumber: {
    color: Colors.black,
    fontFamily: fontFamilies.PoppinsRegular,
    fontSize: RFValue(12),
    marginHorizontal: 5,
  },
});
