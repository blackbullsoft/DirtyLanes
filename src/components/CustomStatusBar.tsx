import {
  StatusBar,
  StyleSheet,
  Appearance,
  useColorScheme,
  Text,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {Colors} from '../utils/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Status {
  backColor: string;
}

const CustomStatusBar: FC<Status> = ({backColor}) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <StatusBar
      backgroundColor={backColor}
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      translucent={false}
    />
  );
};

export default CustomStatusBar;

const styles = StyleSheet.create({});
