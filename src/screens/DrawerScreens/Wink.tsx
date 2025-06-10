import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Ui/Header';
import {Colors} from '../../utils/Colors';

const Wink = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ScrollView>
          <Header />
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
