import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../components/Ui/Header';
import {fontFamilies} from '../../utils/font';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../utils/Colors';
import {DATA, RateList, TheList} from '../../utils/Constant';
import {navigate} from '../../utils/NavigationUtil';
import {images} from '../../assests/image';
import withGradientBackground from '../../components/Ui/withGradientBackground';

const MyGifts = () => {
  const horizontalPadding = 24 * 4.1; // left + right
  const screenWidth = Dimensions.get('window').width;
  const imageSize = (screenWidth - horizontalPadding) / 2;
  const containerSize = (screenWidth - horizontalPadding) / 1.7;
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <Header heading={true} />
      <ScrollView bounces={false} overScrollMode="never">
        <View
          style={{
            padding: 20,
            paddingBottom: 10,
          }}>
          <Text style={styles.heading}>My Gift</Text>
        </View>
        {/* ======== Horizontal Line */}
        <View
          style={{
            borderColor: Colors.border,
            borderWidth: 1,
            width: '100%',
          }}
        />
        <View
          style={{
            padding: 20,
          }}>
          <FlatList
            data={TheList}
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
                  }}>
                  <View
                    style={{
                      paddingHorizontal: 10,
                      //   alignItems: 'center',
                    }}>
                    <Image
                      source={images.TheMan}
                      style={{
                        // width: imageSize * 1.08,
                        width: 100,
                        height: 100,
                        alignSelf: 'center',
                        marginVertical: 12,
                        padding: 0,
                        borderRadius: 60,
                      }}
                      resizeMode="contain"
                    />
                    <Text style={styles.userName}>Roselee60g</Text>
                    <View
                      style={{
                        backgroundColor: Colors.inptBackGrey,
                        // backgroundColor: 'red',
                        width: '100%',
                        alignItems: 'center',
                        paddingVertical: 10,
                      }}>
                      <Image
                        style={{
                          width: 65,
                          height: 65,
                        }}
                        source={images.teddy}
                      />
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        // backgroundColor: 'red',
                        marginVertical: 10,
                      }}>
                      <TouchableOpacity style={styles.approveContainer}>
                        <Text style={styles.approveText}>Approve</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.deleteButtonContainer}>
                        <Text style={styles.deleteText}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            columnWrapperStyle={styles.row}
          />
        </View>
        <View
          style={{
            padding: 20,
            paddingBottom: 10,
          }}>
          <Text style={styles.heading}>Sent</Text>
          <View style={styles.sentContainer}>
            <Image
              style={{
                width: 35,
                height: 38,
              }}
              source={images.sentGift}
            />
            <Text style={styles.text}>
              No record found for your search criteria.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default withGradientBackground(MyGifts);

const styles = StyleSheet.create({
  heading: {
    fontFamily: fontFamilies.PoppinsSemiBold,
    fontSize: RFValue(18),
    color: Colors.black,
  },
  smallContainer: {
    // backgroundColor: Colors.white,
    padding: 5,
    borderRadius: 6,
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
    textAlign: 'center',
  },
  approveContainer: {
    borderWidth: 1,
    borderColor: 'rgba(136, 136, 136, 0.5)',
    backgroundColor: Colors.white,
    paddingHorizontal: 11,
    paddingVertical: 6,
  },
  approveText: {
    fontFamily: fontFamilies.PoppinsRegular,
    fontSize: RFValue(12),
    color: Colors.lightGrey,
  },
  deleteButtonContainer: {
    backgroundColor: Colors.redLight,
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: Colors.redLight,
  },
  deleteText: {
    fontFamily: fontFamilies.PoppinsRegular,
    fontSize: RFValue(12),
    color: Colors.redDark,
  },
  text: {
    fontFamily: fontFamilies.PoppinsRegular,
    fontSize: RFValue(12),
    color: Colors.textGrey,
    textTransform: 'uppercase',
  },
  sentContainer: {
    borderWidth: 2,
    borderColor: Colors.backGrey,
    alignItems: 'center',
    paddingVertical: 35,
    marginBottom: 20,
  },
});
