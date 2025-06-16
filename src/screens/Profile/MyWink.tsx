import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Ui/Header';
import {ScrollView} from 'react-native-gesture-handler';
import {fontFamilies} from '../../utils/font';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../utils/Colors';
import withGradientBackground from '../../components/Ui/withGradientBackground';
import {responsive_factor, TheList} from '../../utils/Constant';
import {TouchableOpacity} from 'react-native';
import {images} from '../../assests/image';

const MyWink = () => {
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
          <Text style={styles.heading}>My Wink</Text>
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
              <TouchableOpacity>
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
                        flexDirection: 'row',
                        paddingVertical: 4,
                      }}>
                      <Image
                        style={{
                          width: 19,
                          height: 12,
                        }}
                        source={images.message}
                      />
                      <Text
                        style={[
                          styles.message,
                          {
                            marginVertical: 0,
                            marginLeft: 2,
                          },
                        ]}>
                        I like talking to you
                      </Text>
                    </View>

                    <View>
                      <Text
                        style={[
                          styles.message,
                          {
                            fontSize: RFValue(10),
                            textAlign: 'center',
                          },
                        ]}>
                        May 10 2024, 12:00 am
                      </Text>
                    </View>

                    <View
                      style={{
                        borderWidth: 4,
                        borderTopLeftRadius: 4,
                        borderTopRightRadius: 4,
                        borderColor: Colors.backGrey,
                        width: responsive_factor * 100,
                        alignSelf: 'center',
                      }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            )}
            columnWrapperStyle={styles.row}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default withGradientBackground(MyWink);

const styles = StyleSheet.create({
  heading: {
    fontFamily: fontFamilies.PoppinsSemiBold,
    fontSize: RFValue(18),
    color: Colors.black,
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
  message: {
    color: Colors.textColor,
    fontFamily: fontFamilies.PoppinsRegular,
    fontSize: RFValue(12),
    marginVertical: 10,
  },
});
