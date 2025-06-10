import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {images} from '../../assests/image';
import {Colors} from '../../utils/Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import {fontFamilies} from '../../utils/font';
import LinearGradient from 'react-native-linear-gradient';

const ScrollingList = () => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      Name: 'Rajesh',
      image: require('../../assests/imageFolder/Ellipse232.png'),
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      Name: 'Ravi',
      image: require('../../assests/imageFolder/Ellipse233.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e22',
      Name: 'Karan',
      image: require('../../assests/imageFolder/Ellipse234.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-1571e29d72',
      Name: 'Karan',
      image: require('../../assests/imageFolder/Ellipse236.png'),
    },
    {
      id: '58694a0f-3da1-471f-145571e29d72',
      Name: 'Karan',
      image: require('../../assests/imageFolder/Ellipse232.png'),
    },
  ];

  type ItemProps = {title: string};

  const Item = ({title}: ItemProps) => (
    <View style={styles.item}>
      <View style={styles.imageOutside}>
        <Image source={title.image} style={styles.image} />
      </View>
      <Text style={styles.Name}>{title.Name}</Text>
    </View>
  );
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
          marginTop: 17,
        }}>
        <Text style={styles.NearBy}>Nearby</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <FlatList
        style={{
          marginLeft: 20,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={DATA}
        renderItem={({item}) => <Item title={item} />}
        keyExtractor={item => item.id}
      />
      <LinearGradient
        colors={['transparent', 'white']}
        style={styles.rightFade}
        pointerEvents="none"
      />
    </View>
  );
};

export default ScrollingList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    // backgroundColor: '#f9c2ff',
    alignItems: 'center',
    // padding: 20,
    marginVertical: 8,
    marginRight: 20,
  },
  Name: {
    fontSize: RFValue(12),
    fontFamily: fontFamilies.PoppinsRegular,
    color: Colors.black,
  },
  image: {
    width: 56,
    height: 56,
    margin: 3,
  },
  imageOutside: {
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 50,
  },
  NearBy: {
    fontSize: RFValue(14),
    fontFamily: fontFamilies.PoppinsSemiBold,
    color: Colors.black,
  },
  seeAll: {
    fontFamily: fontFamilies.PoppinsSemiBold,
    fontSize: RFValue(14),
    color: Colors.redDark,
  },
  rightFade: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width: 30,
    zIndex: 1,
  },
});
