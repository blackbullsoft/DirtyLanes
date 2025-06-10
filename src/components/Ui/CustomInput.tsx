import {FC, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native';
import InsetShadow from 'react-native-inset-shadow';

import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../utils/Colors';
import {fontFamilies} from '../../utils/font';
import DatePicker from 'react-native-date-picker';
import {images} from '../../assests/image';
interface Inputprops {
  left?: React.ReactNode;
  onClear?: () => void;
  right?: boolean;
  heading?: string;
  calendar?: boolean;
  passwordField?: boolean;
  showHeading?: boolean;
  containerStyle?: object;
  inputStyle?: object;
}

export const CustomInput: FC<
  Inputprops & React.ComponentProps<typeof TextInput>
> = ({
  onClear,
  heading,
  calendar,
  left,
  passwordField,
  right = true,
  showHeading = true,
  containerStyle = {},
  inputStyle = {},

  ...props
}) => {
  const [password, setPassword] = useState(true);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <View style={[styles?.flexRow, containerStyle]}>
      {showHeading ? (
        <View style={styles.topHeading}>
          <Text style={styles.borderText}>{heading}</Text>
        </View>
      ) : null}

      <InsetShadow
        left
        top
        shadowColor="#000"
        shadowOpacity={0.5}
        elevation={4}
        containerStyle={[
          {
            // flex: 1,
            borderRadius: 150,
            backgroundColor: '#fff',
            width: '100%',
            overflow: 'hidden',
          },
          inputStyle,
        ]}>
        <TextInput
          {...props}
          secureTextEntry={passwordField && password}
          style={[styles.inputContainer, inputStyle]}
          placeholderTextColor={Colors.darkGrey}
          editable={calendar && false}
        />
      </InsetShadow>

      <View style={styles.icon}>
        {props.value?.length != 0 && right && (
          <TouchableOpacity
            onPress={() => {
              setPassword(!password);
            }}>
            {password ? (
              <Icon name="eye" size={RFValue(18)} color={Colors.darkGrey} />
            ) : (
              <Icon name="eye-off" size={RFValue(18)} color={Colors.darkGrey} />
            )}
          </TouchableOpacity>
        )}
        {props.value?.length != 0 && calendar && (
          <TouchableOpacity
            onPress={() => {
              setOpen(true);
            }}>
            {/* <Icon
              name="calendar-sharp"
              size={RFValue(18)}
              color={Colors.darkGrey}
            /> */}
            <View
              style={{
                backgroundColor: Colors.redLight,
                borderRadius: 50,
                width: 28,
                height: 28,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={images.calendar}
                style={{
                  width: 13,
                  height: 14,
                }}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        mode="date"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowColor: Colors.border,
    borderColor: Colors.black,
    elevation: 45,
    zIndex: -10,
  },
  inputContainer: {
    width: '100%',
    fontFamily: fontFamilies.PoppinsRegular,
    fontSize: RFValue(13),
    // paddingVertical: 10,
    paddingLeft: 20,
    paddingTop: 15,

    color: Colors.black,

    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 50,
    backgroundColor: Colors.white,
    textAlignVertical: 'top',
  },
  icon: {
    // width: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 0,
    position: 'absolute',
    right: 10,
  },
  borderText: {
    fontFamily: fontFamilies.PoppinsRegular,
    fontSize: RFValue(13),
    color: Colors.black,
  },
  topHeading: {
    position: 'absolute',
    top: -10,
    left: 20,
    backgroundColor: Colors.white,
    zIndex: 10,
    paddingHorizontal: 4,
  },

  innerShadowStyle: {
    borderRadius: 150,
    backgroundColor: '#fff',
    width: '100%',
    overflow: 'hidden',
  },
});
