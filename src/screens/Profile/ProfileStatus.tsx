import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {act, useState} from 'react';
import Header from '../../components/Ui/Header';
import {Colors} from '../../utils/Colors';
import {fontFamilies} from '../../utils/font';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  DATA,
  Gender,
  responsive_factor,
  windowWidth,
} from '../../utils/Constant';
import withGradientBackground from '../../components/Ui/withGradientBackground';
import {images} from '../../assests/image';
import Icon from 'react-native-vector-icons/AntDesign';
import ViewImage from '../../components/Media/ViewImage';
import Photos from '../MediaScreen.tsx/Photos';
import Album from '../MediaScreen.tsx/Album';
import Audio from '../MediaScreen.tsx/Audio';
import Video from '../MediaScreen.tsx/Video';
import CustomStatusBar from '../../components/CustomStatusBar';
import {navigate} from '../../utils/NavigationUtil';
import DropDownComponent from '../../components/Ui/DropDownComponent';

const ProfileStatus = () => {
  const horizontalPadding = 24 * 4.1; // left + right
  const screenWidth = Dimensions.get('window').width;
  const imageSize = (screenWidth - horizontalPadding) / 2;
  const containerSize = (screenWidth - horizontalPadding) / 1.7;

  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('1');

  return (
    <SafeAreaView>
      <ScrollView bounces={false} overScrollMode="never">
        <Header heading={true} />

        <View>
          <View style={styles.container}>
            <TouchableOpacity
              style={[
                activeTab == '1'
                  ? styles.mediaContainerActive
                  : styles.NonActivemediaContainer,
              ]}
              onPress={() => setActiveTab('1')}>
              <Text
                style={
                  activeTab == '1' ? styles.mediaText : styles.NonmediaText
                }>
                Viewed Me
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                activeTab == '2'
                  ? styles.mediaContainerActive
                  : styles.NonActivemediaContainer,
              ]}
              onPress={() => setActiveTab('2')}>
              <Text
                style={
                  activeTab == '2' ? styles.mediaText : styles.NonmediaText
                }>
                I Viewed
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                activeTab == '3'
                  ? styles.mediaContainerActive
                  : styles.NonActivemediaContainer,
              ]}
              onPress={() => setActiveTab('3')}>
              <Text
                style={
                  activeTab == '3' ? styles.mediaText : styles.NonmediaText
                }>
                Trending
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: Colors.backGrey,
              marginVertical: 20,
            }}
          />
          {activeTab == '3' && (
            <View
              style={{
                borderColor: Colors.border,
                borderWidth: 1,
                margin: 10,
              }}>
              <View
                style={{
                  padding: 10,
                  paddingBottom: 0,
                }}>
                <Text style={styles.subHeading}>Trending Profile:</Text>
                <DropDownComponent
                  placeHolder="All"
                  containerStyle={{
                    marginTop: 1,
                    marginBottom: 19,
                  }}
                />
              </View>
              <View
                style={{
                  padding: 10,
                  paddingTop: 0,
                }}>
                <Text style={styles.subHeading}>Gender:</Text>
                <DropDownComponent
                  placeHolder="Gender"
                  containerStyle={{
                    marginTop: 1,
                    marginBottom: 19,
                  }}
                  dataList={Gender}
                  search={false}
                />
              </View>
            </View>
          )}

          <View
            style={{
              padding: 20,
            }}>
            <FlatList
              data={DATA}
              keyExtractor={item => item.id}
              numColumns={2}
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigate('ProfileDetails')}>
                  <View
                    style={{
                      borderWidth: 2,
                      borderColor: Colors.border,
                      borderRadius: 10,
                      overflow: 'hidden',
                      // margin: 8,
                      marginRight: 8,
                      width: containerSize,
                      // width: 183,
                      // borderBottomWidth: 0,
                      marginTop: 8,
                      paddingBottom: 20,
                    }}>
                    <View style={styles.iconContainer}>
                      <View style={styles.smallContainer}>
                        <Image
                          source={images.groupfriend}
                          style={styles.iconImage}
                          resizeMode="contain"
                          tintColor={Colors.white}
                        />
                      </View>

                      <View style={styles.smallContainer}>
                        <Image
                          source={images.heart}
                          style={styles.iconImage}
                          tintColor={Colors.white}
                          resizeMode="contain"
                        />
                      </View>
                      <View style={styles.smallContainer}>
                        <Image
                          source={images.Mail}
                          style={styles.iconImage}
                          resizeMode="contain"
                          tintColor={Colors.white}
                        />
                      </View>
                      <View style={styles.smallContainer}>
                        <Image
                          source={images.Smile}
                          style={styles.iconImage}
                          resizeMode="contain"
                          tintColor={Colors.white}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        paddingHorizontal: 7,
                        alignItems: 'center',
                      }}>
                      <Image
                        source={images.TheMan}
                        style={{
                          // width: imageSize * 1.08,
                          width: responsive_factor * 120,
                          height: responsive_factor * 120,
                          // margin: 5,
                          marginVertical: 12,
                          marginRight: 4,
                          padding: 0,
                          borderRadius: 60,
                        }}
                        resizeMode="contain"
                      />
                      <Text style={styles.userName}>Roselee60g</Text>
                      <Text style={styles.description}>
                        33 year old Woman from Tahoe City,
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              columnWrapperStyle={styles.row}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default withGradientBackground(ProfileStatus);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-between',
    marginHorizontal: windowWidth * 60,
  },
  mediaContainerActive: {
    borderWidth: 2,
    borderColor: Colors.redDark,
    backgroundColor: Colors.black,
    // marginRight: 2,
  },
  NonActivemediaContainer: {
    borderWidth: 1,
    borderColor: Colors.backGrey,
    backgroundColor: Colors.white,
    // marginRight: 2,
  },
  mediaText: {
    color: Colors.white,
    fontFamily: fontFamilies.PoppinsLight,
    fontSize: RFValue(13),
    padding: 10,
    paddingHorizontal: RFValue(20),
  },
  NonmediaText: {
    color: Colors.textGrey,
    fontFamily: fontFamilies.PoppinsLight,
    fontSize: RFValue(13),
    padding: 10,
    paddingHorizontal: RFValue(20),
  },
  heading: {
    fontFamily: fontFamilies.PoppinsSemiBold,
    fontSize: RFValue(18),
    color: Colors.black,
  },
  addPhotosContainer: {
    backgroundColor: Colors.greenOnline,
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 10,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  addPhotosText: {
    fontFamily: fontFamilies.PoppinsLight,
    fontSize: RFValue(12),
    color: Colors.white,
  },
  upload: {
    backgroundColor: Colors.black,
    borderRadius: 30,
    flexDirection: 'row',

    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  uploadText: {
    fontFamily: fontFamilies.PoppinsLight,
    fontSize: RFValue(12),
    color: Colors.white,
    paddingLeft: 2,
  },
  uploadImage: {
    width: 13,
    height: 15,
    marginRight: 5,
  },

  iconContainer: {
    // flexDirection: 'row',
    position: 'absolute',
    // left: 0,
    // bottom: 10,
    top: responsive_factor * 30,
    right: 0,
    zIndex: 1110,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: Colors.redLight,
    // paddingVertical: 10,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    // paddingHorizontal: 5,
  },
  iconImage: {
    width: 13,
    height: 13,
    // borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    padding: 0,
    margin: 0,
  },

  userName: {
    fontFamily: fontFamilies.PoppinsSemiBold,
    fontSize: RFValue(14),
    color: Colors.black,
  },
  description: {
    fontFamily: fontFamilies.PoppinsRegular,
    fontSize: RFValue(13),
    color: Colors.textColor,
    textAlign: 'center',
  },
  smallContainer: {
    // backgroundColor: Colors.white,
    padding: 5,
    borderRadius: 6,
  },
  subHeading: {
    color: Colors.lightGrey,
    fontSize: RFValue(12),
    fontFamily: fontFamilies.PoppinsRegular,
  },
});
