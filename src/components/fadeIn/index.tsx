import React, {useEffect} from 'react';
import {useRef} from 'react';
import {Animated} from 'react-native';

const FadeInView = (props: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    return () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    };
  }, [fadeAnim]);

  return (
    <Animated.View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

export default FadeInView;
