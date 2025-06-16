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

const Comment = () => {
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
          <Text style={styles.heading}>My Comment</Text>
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
            // numColumns={1}
            renderItem={({item}) => (
              <TouchableOpacity>
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: Colors.border,
                    borderRadius: 4,
                    overflow: 'hidden',
                    alignItems: 'center',
                    flexDirection: 'row',
                    width: '100%',
                    backgroundColor: Colors.inptBackGrey,
                    marginTop: 8,
                    paddingHorizontal: 10,
                  }}>
                  <Image
                    source={images.TheMan}
                    style={{
                      // width: imageSize * 1.08,
                      width: responsive_factor * 48,
                      height: responsive_factor * 48,
                      alignSelf: 'center',
                      marginVertical: 12,
                      padding: 0,
                      borderRadius: 60,
                    }}
                    resizeMode="contain"
                  />

                  <Text style={styles.message}>Hello, this is fine</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default withGradientBackground(Comment);

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
    color: Colors.textGrey,
    fontFamily: fontFamilies.PoppinsRegular,
    fontSize: RFValue(14),
    // marginVertical: 10,
    marginLeft: 10,
  },
});
