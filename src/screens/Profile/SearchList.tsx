import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import Header from '../../components/Ui/Header';
import Filter from '../Dashboard/Filter';
import {useFilter} from '../../context/FilterContext';
import {DATA} from '../../utils/Constant';
import {images} from '../../assests/image';
import {Colors} from '../../utils/Colors';
import {fontFamilies} from '../../utils/font';
import {RFValue} from 'react-native-responsive-fontsize';
import withGradientBackground from '../../components/Ui/withGradientBackground';
import {navigate} from '../../utils/NavigationUtil';
import CustomStatusBar from '../../components/CustomStatusBar';

const SearchListtsx = () => {
  const {visible, hide} = useFilter();
  const horizontalPadding = 24 * 5; // left + right
  const screenWidth = Dimensions.get('window').width;
  const imageSize = (screenWidth - horizontalPadding) / 2;
  const containerSize = (screenWidth - horizontalPadding) / 1.6;

  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <CustomStatusBar backColor={Colors.redDark} />

      {visible ? <Filter /> : undefined}

      <ScrollView>
        <ScrollView>
          <Header />

          <View
            style={{
              // padding: 14,
              alignItems: 'center',
              marginTop: 10,
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
                      margin: 8,
                      width: containerSize,
                      borderBottomWidth: 0,
                    }}>
                    <View
                      style={{
                        paddingHorizontal: 7,
                      }}>
                      <Image
                        source={images.Girls1}
                        style={{
                          // width: imageSize * 1.08,
                          width: '100%',
                          height: 124,
                          // margin: 5,

                          padding: 0,
                          borderRadius: 10,
                        }}
                        resizeMode="contain"
                      />
                      <Text style={styles.userName}>Roselee60g</Text>
                      <Text style={styles.description}>
                        33 year old Woman from Tahoe City, California, United
                        States{' '}
                      </Text>
                    </View>

                    <View style={styles.iconContainer}>
                      <View style={styles.smallContainer}>
                        <Image
                          source={images.Plus}
                          style={styles.iconImage}
                          resizeMode="contain"
                        />
                      </View>

                      <View style={styles.smallContainer}>
                        <Image
                          source={images.heart}
                          style={styles.iconImage}
                          tintColor={'#9D9D9D'}
                          resizeMode="contain"
                        />
                      </View>

                      <View style={styles.smallContainer}>
                        <Image
                          source={images.Smile}
                          style={styles.iconImage}
                          resizeMode="contain"
                        />
                      </View>

                      <View style={styles.smallContainer}>
                        <Image
                          source={images.Mail}
                          style={styles.iconImage}
                          resizeMode="contain"
                        />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              columnWrapperStyle={styles.row}
            />
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default withGradientBackground(SearchListtsx);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 0,
    margin: 0,
  },
  editButton: {
    backgroundColor: Colors.black,
    alignItems: 'center',
    paddingVertical: 11,
    marginTop: 6,
  },
  editButtonText: {
    fontFamily: fontFamilies.PoppinsRegular,
    color: Colors.white,
    fontSize: RFValue(12),
  },
  deleteButton: {
    backgroundColor: Colors.redLight,
    alignItems: 'center',
    paddingVertical: 11,
    marginTop: 6,
  },
  deleteButtonText: {
    fontFamily: fontFamilies.PoppinsRegular,
    color: Colors.redDark,
    fontSize: RFValue(12),
  },
  clubText: {
    color: Colors.redDark,
    fontFamily: fontFamilies.PoppinsSemiBold,
    fontSize: RFValue(14),
    textAlign: 'center',
    marginBottom: 5,
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
  },
  smallContainer: {
    backgroundColor: Colors.white,
    padding: 7,
    borderRadius: 2,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: Colors.black,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  iconImage: {
    width: 18,
    height: 18,
    borderRadius: 10,
  },
});
