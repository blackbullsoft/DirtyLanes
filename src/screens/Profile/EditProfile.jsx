import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import withGradientBackground from '../../components/Ui/withGradientBackground';
import {Colors} from '../../utils/Colors';
import {images} from '../../assests/image';
import BackButton from '../../components/Ui/BackButton';
import {CustomInput} from '../../components/Ui/CustomInput';
import DropDownComponent from '../../components/Ui/DropDownComponent';
import {fontFamilies} from '../../utils/font';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const EditProfile = () => {
  const [check, setCheck] = useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <ScrollView style={{}}>
        <View>
          <View style={styles.headerContainer}>
            <View
              style={{
                paddingHorizontal: 20,
                paddingTop: 20,
              }}>
              <BackButton />
            </View>

            <View>
              <Image
                source={images.ProfilePic} // replace with your logo path
                style={[styles.profileImage]}
                resizeMode="center"
              />
            </View>
          </View>

          <View
            style={{
              margin: 20,
              marginTop: '25%',
            }}>
            <CustomInput placeholder="Women" heading="I Am" right={false} />
            <CustomInput placeholder="Men" heading="Seeking A" right={false} />
            <CustomInput
              placeholder="01-06-2025"
              heading="Age"
              right={false}
              calendar={true}
            />
            <DropDownComponent placeHolder="Country" />
            <DropDownComponent placeHolder="State" />
            <DropDownComponent placeHolder="City" />

            {/* ========= Personal Details Section ============ */}
          </View>
          <View
            style={{
              borderWidth: 2,
              borderColor: Colors.border,
              borderRadius: 8,
              margin: 14,
              padding: 10,
            }}>
            <Text style={styles.PersonalText}>Profile Questions</Text>
            <CustomInput
              placeholder="Friendship"
              heading="Seeking"
              right={false}
            />
            <CustomInput
              placeholder="Friendship"
              heading="Eye Color"
              right={false}
            />

            <CustomInput
              placeholder="Muslim"
              heading="Religion"
              right={false}
            />

            <CustomInput
              placeholder="Not Stated"
              heading="Maritial Status"
              right={false}
            />

            <CustomInput placeholder="Yes" heading="Children" right={false} />

            <CustomInput placeholder="00-20k" heading="Income" right={false} />

            <CustomInput
              placeholder="Average"
              heading="Body Type"
              right={false}
            />

            <CustomInput
              placeholder="430 Friendly"
              heading="Smoker"
              right={false}
            />

            <CustomInput placeholder="Yes" heading="Drink" right={false} />

            <CustomInput
              placeholder="Gray"
              heading="Hair Color"
              right={false}
            />

            <CustomInput
              placeholder="Not Stated"
              heading="Employment"
              right={false}
            />

            <CustomInput
              placeholder="Bachelors"
              heading="Education"
              right={false}
            />

            <CustomInput
              multiline
              numberOfLines={8}
              placeholder="Text"
              heading="My Match"
              right={false}
              inputStyle={{
                borderRadius: 8,
              }}
            />

            <CustomInput
              multiline
              numberOfLines={8}
              placeholder="Text"
              heading="About Me"
              right={false}
              inputStyle={{
                borderRadius: 8,
              }}
            />

            <CustomInput
              multiline
              numberOfLines={8}
              placeholder="Text"
              heading="My Interest"
              right={false}
              inputStyle={{
                borderRadius: 8,
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              setCheck(!check);
            }}
            style={{
              margin: 20,
              marginTop: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {!check ? (
              <MaterialCommunityIcons
                name="checkbox-blank-outline"
                size={21}
                color={Colors.lightGrey}
              />
            ) : (
              <Icon name="checkbox-outline" size={21} color={Colors.black} />
            )}
            <Text
              style={{
                color: Colors.lightGrey,
                fontFamily: fontFamilies.PoppinsRegular,
                fontSize: RFValue(16),
                marginLeft: 10,
              }}>
              Make these profile questions private
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default withGradientBackground(EditProfile);

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.redDark,
    height: 150,
    position: 'relative', // Key!
  },
  profileImage: {
    width: 185,
    height: 185,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: Colors.white,
    position: 'absolute',
    // bottom: -90, // pulls it below the header
    alignSelf: 'center', // centers horizontally
    zIndex: 100000,
    backgroundColor: Colors.black,
    // top: 20,
  },
  PersonalText: {
    fontFamily: fontFamilies.PoppinsSemiBold,
    fontSize: RFValue(18),
    color: Colors.black,
  },
});
