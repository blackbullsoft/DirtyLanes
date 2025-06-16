import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Ui/Header';
import Filter from '../Dashboard/Filter';
import {useFilter} from '../../context/FilterContext';
import {fontFamilies} from '../../utils/font';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../utils/Colors';
import withGradientBackground from '../../components/Ui/withGradientBackground';
import {Dropdown} from 'react-native-element-dropdown';
import UploadButton from '../../components/Ui/UploadButton';
import {DATA} from '../../utils/Constant';
import {navigate} from '../../utils/NavigationUtil';
import {Dimensions} from 'react-native';
import {images} from '../../assests/image';
import CustomStatusBar from '../../components/CustomStatusBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

const MyMatches = () => {
  const {visible, hide} = useFilter();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const horizontalPadding = 24 * 4.1; // left + right
  const screenWidth = Dimensions.get('window').width;
  const imageSize = (screenWidth - horizontalPadding) / 2;
  const containerSize = (screenWidth - horizontalPadding) / 1.7;
  const data = [
    {label: 'All', value: '1'},
    {label: 'Male', value: '2'},
    {label: 'Female', value: '3'},
  ];
  return (
    <SafeAreaView
      style={{flex: 1, position: 'relative', backgroundColor: Colors.redDark}}>
      {visible ? <Filter /> : undefined}
      <CustomStatusBar backColor={Colors.redDark} />

      <ScrollView bounces={false} overScrollMode="never">
        <Header heading={true} />
        <LinearGradient
          colors={[
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFF8C9',
          ]}
          style={styles.gradient}>
          <View>
            <View
              style={{
                padding: 20,
              }}>
              <Text style={styles.heading}>My Matches</Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  // maxWidth: '70%',
                  justifyContent: 'space-between',
                  //   backgroundColor: 'black',
                }}>
                <View style={{zIndex: 999}}>
                  <Text style={styles.subHeading}>Gender: </Text>
                  <Dropdown
                    style={[styles.dropdown]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    //   containerStyle={styles.dropdownListContainer} // <- added this
                    data={data}
                    // search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'All' : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                      setValue(item.value);
                      setIsFocus(false);
                    }}
                    renderRightIcon={() => (
                      <View style={styles.iconWrapper}></View>
                    )}
                  />
                </View>

                <View
                  style={
                    {
                      // marginRight: 10,
                    }
                  }>
                  <Text style={styles.subHeading}>Age :</Text>
                  <TextInput
                    keyboardType="number-pad"
                    placeholder="18"
                    style={styles.textInput}
                    maxLength={2}
                    placeholderTextColor={Colors.tabGrey}
                  />
                </View>

                <View
                  style={
                    {
                      // marginRight: 10,
                    }
                  }>
                  <Text style={styles.subHeading}>To :</Text>
                  <TextInput
                    keyboardType="number-pad"
                    placeholder="18"
                    style={styles.textInput}
                    maxLength={2}
                    placeholderTextColor={Colors.tabGrey}
                  />
                </View>

                <View
                  style={{
                    marginRight: 10,
                  }}>
                  <Text style={[styles.subHeading]}></Text>

                  <UploadButton
                    text="Filters"
                    color="white"
                    backgroundColor={Colors.black}
                    containerStyle={{
                      // marginTop: 10,
                      // marginBottom: 15,
                      borderRadius: 0,
                      paddingVertical: 13,
                      paddingHorizontal: 30,
                      marginRight: 0,
                      alignSelf: 'auto',
                    }}
                  />
                </View>
              </View>
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
                            width: 100,
                            height: 100,
                            // margin: 5,
                            marginVertical: 12,
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
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyMatches;

const styles = StyleSheet.create({
  heading: {
    fontFamily: fontFamilies.PoppinsSemiBold,
    fontSize: RFValue(18),
    color: Colors.black,
  },
  gradient: {
    // flex: 1,
    // padding: 20,
    // zIndex: 10,
    // height: 10,
  },
  subHeading: {
    color: Colors.lightGrey,
    fontFamily: fontFamilies.PoppinsRegular,
    fontSize: RFValue(16),
  },
  dropdown: {
    height: 50,
    borderColor: Colors.border,
    borderWidth: 1,
    // borderRadius: 50,
    paddingHorizontal: 8,
    width: 100,
    // marginRight: 10,
  },
  placeholderStyle: {
    fontSize: RFValue(14),
    marginLeft: 10,
    color: Colors.tabGrey,
  },
  selectedTextStyle: {
    fontSize: RFValue(14),
    marginLeft: 10,
    fontFamily: fontFamilies.PoppinsMedium,
    color: Colors.black,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  iconWrapper: {
    // backgroundColor: Colors.redLight,
    // borderRadius: 50,
    // marginRight: 5,
    // padding: 4,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  textInput: {
    borderColor: Colors.border,
    borderWidth: 1,
    // borderRadius: 50,
    paddingHorizontal: 16,
    fontSize: RFValue(14),
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
  iconContainer: {
    // flexDirection: 'row',
    position: 'absolute',
    // left: 0,
    // bottom: 10,
    top: 20,
    right: 0,
    zIndex: 1110,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: Colors.backGrey,
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
});
