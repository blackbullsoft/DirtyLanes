import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import Header from '../../components/Ui/Header';

const SearchListtsx = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchListtsx;

const styles = StyleSheet.create({});
