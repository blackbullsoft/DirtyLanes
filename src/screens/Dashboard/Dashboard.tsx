import React, {useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../../components/Ui/Header';
import Filter from './Filter'; // 👈 Your Filter component
import ScrollingList from '../../components/Ui/NearByScroll';
import ScrollMatch from '../../components/Ui/MatchScroll';
import BestMatchScroll from '../../components/Ui/BestMatchScroll';
import {useFilter} from '../../context/FilterContext';
import CustomStatusBar from '../../components/CustomStatusBar';
import {Colors} from '../../utils/Colors';
import {responsive_factor} from '../../utils/Constant';
import withGradientBackground from '../../components/Ui/withGradientBackground';

const Dashboard = () => {
  const [showFilter, setShowFilter] = useState(false);
  const {visible, hide} = useFilter();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        // backgroundColor: 'red',
        paddingBottom: insets.bottom - responsive_factor * 120,
      }}
      edges={['bottom', 'top']}>
      <CustomStatusBar />
      {/* <StatusBar barStyle="dark-content" color="#6a51ae" /> */}

      {visible ? <Filter /> : undefined}

      <ScrollView
        contentContainerStyle={{
          paddingBottom: insets.bottom + 46,
        }}
        bounces={false}
        overScrollMode="never">
        <Header heading={true} />

        {/* Render your main content here */}
        <ScrollingList />
        <ScrollMatch />
        <ScrollMatch />

        {/* <BestMatchScroll /> */}
      </ScrollView>

      {/* Render Filter fullscreen only when needed */}
    </SafeAreaView>
  );
};

export default withGradientBackground(Dashboard);
