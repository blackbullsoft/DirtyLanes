import {StatusBar, useColorScheme, View, Platform} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

const CustomStatusBar = ({backColor = 'black'}) => {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <>
      {/* Set actual StatusBar properties */}
      <StatusBar
        backgroundColor={backColor}
        barStyle={isDark ? 'light-content' : 'dark-content'}
        translucent={false} // ⛔ Leave this as false to avoid drawing behind status bar
      />

      {/* Create a view that fills the status bar area */}
    </>
  );
};
export default CustomStatusBar;
