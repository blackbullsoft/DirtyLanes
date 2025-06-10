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
import {windowWidth} from '../../utils/Constant';
import withGradientBackground from '../../components/Ui/withGradientBackground';
import {images} from '../../assests/image';
import Icon from 'react-native-vector-icons/AntDesign';
import ViewImage from '../../components/Media/ViewImage';
import Photos from '../MediaScreen.tsx/Photos';
import Album from '../MediaScreen.tsx/Album';
import Audio from '../MediaScreen.tsx/Audio';
import Video from '../MediaScreen.tsx/Video';

const Media = () => {
  const horizontalPadding = 24 * 3.1; // left + right
  const screenWidth = Dimensions.get('window').width;
  const imageSize = (screenWidth - horizontalPadding) / 3;

  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('1');

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  console.log('showModal', showModal);
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />

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
                Photos
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
                Albums
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
                Audios
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                activeTab == '4'
                  ? styles.mediaContainerActive
                  : styles.NonActivemediaContainer,
              ]}
              onPress={() => setActiveTab('4')}>
              <Text
                style={
                  activeTab == '4' ? styles.mediaText : styles.NonmediaText
                }>
                Videos
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
          <View
            style={{
              marginHorizontal: windowWidth * 60,
            }}>
            {/* ======================  Photos ==================== */}
            {activeTab == '1' && <Photos />}

            {/* ============== Albums Screens ============= */}
            {activeTab == '2' && <Album />}

            {/* ============== Albums Screens ============= */}
            {activeTab == '3' && <Audio />}

            {/* ============= Video Screens ==================== */}
            {activeTab == '4' && <Video />}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default withGradientBackground(Media);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-evenly',
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
    paddingHorizontal: 16,
  },
  NonmediaText: {
    color: Colors.textGrey,
    fontFamily: fontFamilies.PoppinsLight,
    fontSize: RFValue(13),
    padding: 10,
    paddingHorizontal: 16,
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

  row: {
    flexDirection: 'row',
    padding: 0,
    margin: 0,
  },
});
