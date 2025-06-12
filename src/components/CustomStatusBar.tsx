import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

interface Status {
  backColor: string;
}
const CustomStatusBar: FC<Status> = ({backColor}) => {
  return (
    <View>
      <StatusBar barStyle="default" backgroundColor={backColor} />
    </View>
  );
};

export default CustomStatusBar;

const styles = StyleSheet.create({});
