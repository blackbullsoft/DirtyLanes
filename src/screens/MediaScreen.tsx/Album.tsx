import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {CustomInput} from '../../components/Ui/CustomInput';
import UploadButton from '../../components/Ui/UploadButton';
import {Colors} from '../../utils/Colors';
import {fontFamilies} from '../../utils/font';
import {RFValue} from 'react-native-responsive-fontsize';
import {images} from '../../assests/image';
import {Dimensions} from 'react-native';
import {DATA} from '../../utils/Constant';

const Album = () => {
  const horizontalPadding = 24 * 5; // left + right
  const screenWidth = Dimensions.get('window').width;
  const imageSize = (screenWidth - horizontalPadding) / 2;
  return (
    <View>
      <View
        style={{
          paddingHorizontal: 14,
          borderWidth: 1,
          borderColor: Colors.border,
        }}>
        <CustomInput
          placeholder="Add Album"
          heading=""
          right={false}
          showHeading={false}
          containerStyle={{marginTop: 15}}
        />
        <UploadButton
          text="Add Album"
          color="white"
          backgroundColor={Colors.redDark}
          containerStyle={{marginTop: 10, marginBottom: 15}}
        />
      </View>
      <View>
        <Text style={styles.heading}>List of Albums</Text>

        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={({item}) => (
            <View>
              <Text style={styles.clubText}>Club</Text>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: Colors.border,
                  borderRadius: 18,
                  padding: 10,
                  marginRight: 10,
                  marginBottom: 10,
                }}>
                <Image
                  source={images.Best}
                  style={{
                    width: imageSize,
                    height: imageSize,
                    margin: 5,
                    padding: 0,
                    borderRadius: 10,
                  }}
                  resizeMode="contain"
                />
                <TouchableOpacity style={styles.editButton}>
                  <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.deleteButton}>
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          columnWrapperStyle={styles.row}
        />
      </View>
    </View>
  );
};

export default Album;

const styles = StyleSheet.create({
  heading: {
    fontFamily: fontFamilies.PoppinsSemiBold,
    fontSize: RFValue(18),
    color: Colors.black,
    marginVertical: 12,
  },
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
});
