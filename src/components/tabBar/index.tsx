import React, {useEffect, useState} from 'react';
import {Pressable, Keyboard, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import useStyles from './useStyles';
import {ROUTER} from '../../navigations/routes';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import useScale from '../../utils/useScale';

const TabBar = ({state, descriptors, navigation}: any) => {
  const styles = useStyles();
  const [keyboardOn, setKeyboradOn] = useState(false);
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const {ms} = useScale();
  const {colors} = useTheme();

  useEffect(() => {
    const keyboardon = () => {
      setKeyboradOn(true);
    };
    const keyboardoff = () => {
      setKeyboradOn(false);
    };
    Keyboard.addListener('keyboardDidShow', keyboardon);
    Keyboard.addListener('keyboardDidHide', keyboardoff);
    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  if (keyboardOn) {
    return null;
  }

  const getRouteName = (route: string, isFocused: boolean) => {
    switch (route) {
      case ROUTER.HOME:
        return isFocused ? 'ios-home' : 'ios-home-outline';

      case ROUTER.PLP:
        return isFocused ? 'md-cube' : 'md-cube-outline';

      case ROUTER.CART:
        return isFocused ? 'cart' : 'cart-outline';

      case ROUTER.ACCOUNT:
        return isFocused ? 'ios-person' : 'ios-person-outline';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {state.routes.map((route: any, index: number) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!event.defaultPrevented) {
              if (isFocused) {
                navigation.navigate(route.name, {
                  screen: route.name,
                });
              } else {
                navigation.navigate(route.name);
              }
            }
          };

          return (
            <View key={route.key} style={styles.item}>
              <Pressable
                key={route.key}
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                style={styles.tabBtn}>
                <View style={styles.icon}>
                  <MaskedView
                    style={styles.maskedView}
                    maskElement={
                      <Ionicons
                        size={ms(26)}
                        color={isFocused ? colors.primary : colors.text}
                        name={getRouteName(route.name, isFocused) as string}
                        maxFontSizeMultiplier={1}
                      />
                    }>
                    <LinearGradient
                      colors={
                        isFocused
                          ? [colors.secondary, colors.primary]
                          : ['#AAA9A9', '#AAA9A9']
                      }
                      useAngle
                      angle={100}
                      locations={[0.3, 1]}
                      style={styles.flex1}
                    />
                  </MaskedView>
                </View>
              </Pressable>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default TabBar;
