import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Ui/Header';
import {Colors} from '../../utils/Colors';
import CustomStatusBar from '../../components/CustomStatusBar';

const Wink = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar backColor={Colors.redDark} />

      <View>
        <ScrollView bounces={false} overScrollMode="never">
          <Header heading={true} />
          {/* ========= Scrolling Through List ===== */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Wink;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: Colors.white,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
