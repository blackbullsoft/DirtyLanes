import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {Colors} from '../../utils/Colors';
import {fontFamilies} from '../../utils/font';
import {RFValue} from 'react-native-responsive-fontsize';

interface UploadButtonProps {
  text: string;
  color: string;
  backgroundColor: string;
  icon?: React.ReactNode;
  containerStyle?: object;
}
const UploadButton: FC<UploadButtonProps> = ({
  text = 'Add Photos',
  color = Colors.white,

  backgroundColor = Colors.greenOnline,
  icon,
  containerStyle = {},
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.addPhotosContainer,
        {
          backgroundColor: backgroundColor,
        },
        containerStyle,
      ]}>
      <Text
        style={[
          styles.addPhotosText,
          {
            color: color,
          },
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default UploadButton;

const styles = StyleSheet.create({
  addPhotosContainer: {
    backgroundColor: Colors.greenOnline,
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginRight: 10,
    alignSelf: 'flex-start',
  },
  addPhotosText: {
    fontFamily: fontFamilies.PoppinsLight,
    fontSize: RFValue(13),
    color: Colors.white,
  },
});
