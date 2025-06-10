import {
  Alert,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {images} from '../../assests/image';
import ButtonComponent from '../Ui/ButtonComponent';
import Icon from 'react-native-vector-icons/AntDesign';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../utils/Colors';

interface ViewImageProps {
  showModal?: boolean;
  imageUrl?: string; // Optional prop for image URL
  onClose: () => void;
}
const ViewImage: FC<ViewImageProps> = ({showModal, imageUrl, onClose}) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          //   Alert.alert('Modal has been closed.');
          onClose();
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Icon
                name="closecircleo"
                size={RFValue(28)}
                color={Colors.darkGrey}
              />
            </TouchableOpacity>
            <Image
              source={{
                uri: 'https://img.freepik.com/free-psd/middle-age-black-man-portrait-isolated_23-2151884903.jpg?semt=ais_hybrid&w=740',
              }}
              style={styles.imageContainer}
              resizeMode="contain"
            />
            <View style={styles.deleteButton}>
              <ButtonComponent
                name="Delete"
                onPress={() => console.log('Delete button pressed')}
                theme={true}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ViewImage;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'rgba(49, 42, 42, 0.5)', // Semi-transparent background
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
    height: '90%',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    zIndex: 10,
    backgroundColor: Colors.white,
    borderRadius: 50,
    right: 12,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    margin: 5,
    padding: 0,
  },
  deleteButton: {
    position: 'absolute',
    bottom: 20,
    // left: 20,
    width: '90%',
  },
});
