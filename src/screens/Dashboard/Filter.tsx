import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {FC} from 'react';
import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';
import {fontFamilies} from '../../utils/font';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../utils/Colors';
import {CustomInput} from '../../components/Ui/CustomInput';
import InsetShadow from 'react-native-inset-shadow';
import DropDownComponent from '../../components/Ui/DropDownComponent';
import {useKeyboard} from '../../utils/useKeyboard';
import ButtonComponent from '../../components/Ui/ButtonComponent';
import {useFilter} from '../../context/FilterContext';

const Filter = () => {
  const isKeyboardOpen = useKeyboard();
  const {visible, hide} = useFilter();

  useEffect(() => {
    console.log('Keyboard is open:', isKeyboardOpen);
  }, [isKeyboardOpen]);

  console.log('visible INside flter', visible);
  return (
    <>
      {visible && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 200,
            paddingTop: 20,
          }}
          style={{
            position: 'absolute',
            backgroundColor: 'white',
            zIndex: 100,

            top: 129,
            height: '100%',
            padding: 20,
            width: '80%',
            right: 0,
            marginHorizontal: 20,
            // elevation: 5,
            // paddingBottom: 300,
          }}>
          <Text style={styles.heading}>New Members</Text>
          <CustomInput placeholder="Women" heading="I Am" right={false} />
          <CustomInput placeholder="Men" heading="Seeking A" right={false} />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 25,
            }}>
            <CustomInput
              placeholder="18"
              heading="Age"
              right={false}
              containerStyle={{
                width: '45%',
                marginTop: 0,
              }}
            />

            <Text style={styles.toHeading}>To</Text>

            <CustomInput
              placeholder="30"
              heading=""
              right={false}
              containerStyle={{
                width: '45%',
                marginTop: 0,
              }}
              showHeading={false}
            />
          </View>

          <DropDownComponent placeHolder="Country" />
          <DropDownComponent placeHolder="State" />
          <DropDownComponent placeHolder="City" />

          <CustomInput placeholder="ADJH" heading="UserName" right={false} />
          <Text
            style={[
              styles.heading,
              {
                marginTop: 10,
              },
            ]}>
            Additional Options
          </Text>

          <DropDownComponent placeHolder="Online Only" />
          <DropDownComponent placeHolder="With Pictures Only" />
          <CustomInput
            placeholder="Give title"
            heading="Save This Search"
            right={false}
            containerStyle={{
              marginBottom: 20,
            }}
          />

          <ButtonComponent
            name="Submit"
            onPress={() => {
              console.log('ds');
            }}
            theme={false}
          />
        </ScrollView>
      )}
    </>
  );
};

export default Filter;

const styles = StyleSheet.create({
  heading: {
    fontFamily: fontFamilies.PoppinsSemiBold,
    fontSize: RFValue(18),
    color: Colors.black,
  },
  toHeading: {
    fontFamily: fontFamilies.PoppinsRegular,
    fontSize: RFValue(14),
    color: Colors.text,
    textTransform: 'uppercase',
  },
  inputContainer: {
    width: '100%',
    fontFamily: fontFamilies.PoppinsRegular,
    fontSize: RFValue(16),
    paddingVertical: 10,
    paddingLeft: 20,

    color: Colors.black,

    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 50,
    backgroundColor: Colors.inptBackGrey,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginTop: 25,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowColor: Colors.border,
    borderColor: Colors.black,
    elevation: 45,
    zIndex: -10,
    width: '40%',
  },
  borderText: {
    fontFamily: fontFamilies.PoppinsRegular,
    fontSize: RFValue(13),
    color: Colors.black,
  },
  topHeading: {
    position: 'absolute',
    top: '-20%',
    left: 20,
    backgroundColor: Colors.white,
    zIndex: 10,
    paddingHorizontal: 4,
  },
});
