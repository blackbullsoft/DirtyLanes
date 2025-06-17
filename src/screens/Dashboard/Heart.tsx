import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../../components/Ui/Header';
import ScrollingList from '../../components/Ui/NearByScroll';
import ScrollMatch from '../../components/Ui/MatchScroll';

const Heart = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
        paddingBottom: insets.bottom - 100,
        // 🔴 CHANGE THIS TO BLACK!
      }}></SafeAreaView>
  );
};

export default Heart;

const styles = StyleSheet.create({});
