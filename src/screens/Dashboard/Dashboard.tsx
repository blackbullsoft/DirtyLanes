import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Ui/Header';
import Filter from './Filter'; // 👈 Your Filter component
import ScrollingList from '../../components/Ui/NearByScroll';
import ScrollMatch from '../../components/Ui/MatchScroll';
import BestMatchScroll from '../../components/Ui/BestMatchScroll';
import {useFilter} from '../../context/FilterContext';
import CustomStatusBar from '../../components/CustomStatusBar';
import {Colors} from '../../utils/Colors';

const Dashboard = () => {
  const [showFilter, setShowFilter] = useState(false);
  const {visible, hide} = useFilter();

  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <CustomStatusBar backColor={Colors.redDark} />

      {visible ? <Filter /> : undefined}

      <ScrollView>
        <Header />

        {/* Render your main content here */}
        <ScrollingList />
        <ScrollMatch />
        <BestMatchScroll />
      </ScrollView>

      {/* Render Filter fullscreen only when needed */}
    </SafeAreaView>
  );
};

export default Dashboard;
