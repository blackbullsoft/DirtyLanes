import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Ui/Header';
import {ScrollView} from 'react-native-gesture-handler';
import {fontFamilies} from '../../utils/font';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../utils/Colors';
import withGradientBackground from '../../components/Ui/withGradientBackground';
import DropDownComponent from '../../components/Ui/DropDownComponent';
import {CustomInput} from '../../components/Ui/CustomInput';
import ButtonComponent from '../../components/Ui/ButtonComponent';
import {responsive_factor} from '../../utils/Constant';

const MatchAlert = () => {
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
          <Text style={styles.heading}>Match Alert</Text>
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
          <View>
            <Text style={styles.subHeading}>Active:</Text>
            <DropDownComponent
              placeHolder="No"
              containerStyle={{
                marginTop: 1,
                marginBottom: 19,
              }}
            />
          </View>

          <View>
            <Text style={styles.subHeading}>Frequency:</Text>
            <DropDownComponent
              placeHolder="Week"
              containerStyle={{
                marginTop: 1,
                marginBottom: 19,
              }}
            />
          </View>

          <View>
            <Text style={styles.subHeading}>Gender:</Text>
            <DropDownComponent
              placeHolder="Male"
              containerStyle={{
                marginTop: 1,
                marginBottom: 19,
              }}
            />
          </View>

          <Text style={styles.subHeading}>Age:</Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 25,
            }}>
            <CustomInput
              placeholder="18"
              heading="Age"
              right={false}
              showHeading={false}
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
          <ButtonComponent name="Save" onPress={() => {}} theme={false} />
          <Text style={styles.noteHeading}>
            <Text
              style={{
                fontWeight: '700',
              }}>
              Note:
            </Text>
             Matches are sent to the email you registered with. If you don't
            recieve them, please check your spam folder.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default withGradientBackground(MatchAlert);

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
  subHeading: {
    color: Colors.lightGrey,
    fontSize: RFValue(12),
    fontFamily: fontFamilies.PoppinsRegular,
  },
  noteHeading: {
    color: Colors.lightGrey,
    fontSize: RFValue(12),
    fontFamily: fontFamilies.PoppinsRegular,
    marginTop: responsive_factor * 30,
  },
});
