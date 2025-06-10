import React, {FC, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import InsetShadow from 'react-native-inset-shadow';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../utils/Colors';
import {RFValue} from 'react-native-responsive-fontsize';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

interface DrowpDownInterface {
  placeHolder: string;
}
const DropDownComponent: FC<DrowpDownInterface> = ({placeHolder}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* {renderLabel()} */}
        <InsetShadow
          left
          top
          shadowColor="#000"
          shadowOpacity={0.5}
          elevation={5}
          containerStyle={styles.shadowContainer}>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            containerStyle={styles.dropdownListContainer} // <- added this
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? placeHolder : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderRightIcon={() => (
              <View style={styles.iconWrapper}>
                <Icon
                  color={isFocus ? Colors.redDark : Colors.redborder}
                  name="caretdown"
                  size={20}
                />
              </View>
            )}
          />
        </InsetShadow>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DropDownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.inptBackGrey,
    marginTop: 25,
    borderRadius: 50,
  },
  shadowContainer: {
    borderRadius: 50,
    width: '100%',
    overflow: 'hidden',
    height: 50, // keeps it fixed
  },
  dropdown: {
    height: 50,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 8,
  },
  dropdownListContainer: {
    // position: 'absolute',
    // top: 50,
    // zIndex: 999,
    // width: screenWidth - 40, // adjust for padding/margin
    // alignSelf: 'center',
    // borderRadius: 10,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: RFValue(14),
    marginLeft: 10,
  },
  selectedTextStyle: {
    fontSize: RFValue(14),
    marginLeft: 10,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  iconWrapper: {
    backgroundColor: Colors.redLight,
    borderRadius: 50,
    marginRight: 5,
    padding: 4,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
