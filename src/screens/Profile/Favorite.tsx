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

const Favorite = () => {
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
          <Text style={styles.heading}>My Favorites</Text>
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

                    <View>
                      <Text
                        style={[
                          styles.message,
                          {
                            fontSize: RFValue(10),
                            textAlign: 'center',
                          },
                        ]}>
                        27, United Kingdom
                      </Text>
                    </View>
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

export default withGradientBackground(Favorite);

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
