import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {images} from '../../assests/image';
import {Colors} from '../../utils/Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import {fontFamilies} from '../../utils/font';
import LinearGradient from 'react-native-linear-gradient';

const ScrollMatch = () => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      Name: 'Arjun Mehra',
      image: require('../../assests/imageFolder/Rectangle.png'),
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      Name: 'Ravi',
      image: require('../../assests/imageFolder/Reactangle1.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e22',
      Name: 'Karan',
      image: require('../../assests/imageFolder/Rectangle.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-1571e29d72',
      Name: 'Karan',
      image: require('../../assests/imageFolder/Reactangle1.png'),
    },
    {
      id: '58694a0f-3da1-471f-145571e29d72',
      Name: 'Karan',
      image: require('../../assests/imageFolder/Reactangle1.png'),
    },
  ];

  type ItemProps = {title: string};

  const Item = ({title}: ItemProps) => (
    <View style={styles.item}>
      <View style={styles.imageOutside}>
        <Image source={title.image} style={styles.image} />
        <Text style={styles.Name}>{title.Name}</Text>
        <Text style={styles.Place}>New Delhi</Text>
      </View>
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
        <Text style={styles.NearBy}>New Members</Text>
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

export default ScrollMatch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    // backgroundColor: '#f9c2ff',
    alignItems: 'center',
    // padding: 20,
    marginVertical: 8,
    marginRight: 15,
  },
  Name: {
    fontSize: RFValue(12),
    fontFamily: fontFamilies.PoppinsSemiBold,
    color: Colors.black,
  },
  Place: {
    fontSize: RFValue(12),
    fontFamily: fontFamilies.PoppinsLight,
    color: Colors.black,
  },
  image: {
    width: 124,
    height: 124,
    margin: 3,
    borderRadius: 20,
  },
  imageOutside: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 20,
    padding: 4,
    paddingBottom: 7,
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
