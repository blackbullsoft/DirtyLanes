import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  [key: string]: any;
};

const withGradientBackground = <P extends Props>(
  WrappedComponent: React.ComponentType<P>,
): React.FC<P> => {
  const ComponentWithGradient: React.FC<P> = props => {
    return (
      <LinearGradient
        colors={[
          '#FFFFFF',
          '#FFFFFF',
          '#FFFFFF',
          '#FFFFFF',
          '#FFFFFF',
          '#FFF8C9',
        ]}
        style={styles.gradient}>
        <WrappedComponent {...props} />
      </LinearGradient>
    );
  };

  return ComponentWithGradient;
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    // padding: 20,
    zIndex: 10,
    height: 10,
  },
});

export default withGradientBackground;
