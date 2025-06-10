import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {fontFamilies} from '../../utils/font';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../utils/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import UploadButton from '../../components/Ui/UploadButton';

const Video = () => {
  const [check, setCheck] = useState(false);

  return (
    <View>
      <Text style={styles.heading}>Add Video:</Text>

      <View style={styles.container}>
        <Text style={styles.Text}>Add Video:</Text>

        <View style={styles.chooseContainer}>
          <TouchableOpacity style={styles.chooseFileButton}>
            <Text style={styles.chooseText}>Choose File</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => {
            setCheck(!check);
          }}>
          <Text
            style={[
              styles.Text,
              {
                padding: 0,
                marginRight: 7,
              },
            ]}>
            Private:
          </Text>

          {check ? (
            <Icon name="checkbox" size={21} color={Colors.cadiumRed} />
          ) : (
            <Icon name="checkbox-outline" size={21} color={Colors.black} />
          )}
        </TouchableOpacity>

        <UploadButton
          text="Submit"
          color="white"
          backgroundColor={Colors.black}
          containerStyle={{marginTop: 10, marginBottom: 15}}
        />
      </View>
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  heading: {
    fontFamily: fontFamilies.PoppinsSemiBold,
    fontSize: RFValue(18),
    color: Colors.black,
  },
  container: {
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 15,
    marginTop: 20,
  },
  chooseFileButton: {
    backgroundColor: Colors.white,
    alignSelf: 'flex-start',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 14,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.black,
  },
  chooseText: {
    fontFamily: fontFamilies.PoppinsSemiBold,
    fontSize: RFValue(12),
    color: Colors.black,
  },
  Text: {
    fontFamily: fontFamilies.PoppinsRegular,
    fontSize: RFValue(14),
    color: Colors.lightGrey,
  },
  chooseContainer: {
    backgroundColor: Colors.inptBackGrey,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 10,
  },
});
