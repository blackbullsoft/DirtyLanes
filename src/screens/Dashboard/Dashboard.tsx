import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Ui/Header';
import Filter from './Filter'; // 👈 Your Filter component
import ScrollingList from '../../components/Ui/NearByScroll';
import ScrollMatch from '../../components/Ui/MatchScroll';
import BestMatchScroll from '../../components/Ui/BestMatchScroll';

const Dashboard = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      {showFilter ? (
        <Filter
          visible={showFilter}
          onClose={() => setShowFilter(!showFilter)}
        />
      ) : undefined}

      <ScrollView>
        <Header
          onFilterPress={() => setShowFilter(!showFilter)}
          visible={showFilter}
        />
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
