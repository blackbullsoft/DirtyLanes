import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ViewImage from '../../components/Media/ViewImage';
import {images} from '../../assests/image';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../utils/Colors';
import {fontFamilies} from '../../utils/font';

const Photos = () => {
  const horizontalPadding = 24 * 3.1; // left + right
  const screenWidth = Dimensions.get('window').width;
  const imageSize = (screenWidth - horizontalPadding) / 3;

  const [showModal, setShowModal] = useState(false);
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  return (
    <View>
      <View>
        <Text style={styles.heading}>Photos</Text>

        <View style={{flexDirection: 'row', marginBottom: 15}}>
          <TouchableOpacity style={styles.addPhotosContainer}>
            <Text style={styles.addPhotosText}> + Add Photos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.upload}>
            <Image source={images.Upload} style={styles.uploadImage} />
            <Text style={styles.uploadText}>Start Upload</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ====================== User Image Photos FlatList ==================== */}
      <View style={{marginBottom: 20}} />

      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        numColumns={3}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              console.log('Image clicked');
              setShowModal(true);
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
          </TouchableOpacity>
        )}
        columnWrapperStyle={styles.row}
      />

      {/* ================ View Image ================= */}
      <ViewImage
        showModal={showModal}
        imageUrl={images.Best}
        onClose={() => setShowModal(false)}
      />
    </View>
  );
};

export default Photos;

const styles = StyleSheet.create({
  heading: {
    fontFamily: fontFamilies.PoppinsSemiBold,
    fontSize: RFValue(18),
    color: Colors.black,
  },
  addPhotosContainer: {
    backgroundColor: Colors.greenOnline,
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 10,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  addPhotosText: {
    fontFamily: fontFamilies.PoppinsLight,
    fontSize: RFValue(12),
    color: Colors.white,
  },
  upload: {
    backgroundColor: Colors.black,
    borderRadius: 30,
    flexDirection: 'row',

    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  uploadText: {
    fontFamily: fontFamilies.PoppinsLight,
    fontSize: RFValue(12),
    color: Colors.white,
    paddingLeft: 2,
  },
  uploadImage: {
    width: 13,
    height: 15,
    marginRight: 5,
  },

  row: {
    flexDirection: 'row',
    padding: 0,
    margin: 0,
  },
});
