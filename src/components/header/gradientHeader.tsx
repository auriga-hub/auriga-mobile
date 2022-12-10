import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Platform, Pressable, StatusBar, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {navigationRef} from '../../navigations';
import useScale from '../../utils/useScale';
import useGradientHeaderStyles from './useGradientHeaderStyles';

type PropType = {
  title: string;
  hideCart?: boolean;
  showBack?: boolean;
  onPressBack?: () => void;
};

const GradientHeader: React.FC<PropType> = ({
  title,
  hideCart,
  showBack,
  onPressBack,
}) => {
  const {colors} = useTheme();
  const insets = useSafeAreaInsets();
  const {ms} = useScale();
  const styles = useGradientHeaderStyles();
  return (
    <>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle="light-content"
      />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[colors.secondary, colors.primary]}
        style={{
          ...styles.grad,
          height:
            (Platform.OS === 'ios'
              ? insets.top
              : StatusBar?.currentHeight || 0) + ms(70),
          paddingTop:
            Platform.OS === 'ios' ? insets.top : StatusBar?.currentHeight || 0,
        }}>
        {showBack ? (
          <Pressable
            onPress={() => {
              if (onPressBack) {
                onPressBack();
              } else {
                if (navigationRef.canGoBack()) {
                  navigationRef.goBack();
                }
              }
            }}
            style={{
              ...styles.back,
              top:
                Platform.OS === 'ios'
                  ? insets.top
                  : StatusBar?.currentHeight || 0,
            }}>
            <MaterialIcons
              size={ms(24)}
              color={colors.white}
              name={'arrow-back-ios'}
              maxFontSizeMultiplier={1}
            />
          </Pressable>
        ) : (
          <View />
        )}
        <Text
          maxFontSizeMultiplier={1}
          adjustsFontSizeToFit
          numberOfLines={1}
          style={styles.pageTitle}>
          {title}
        </Text>
        {hideCart ? (
          <View />
        ) : (
          <View style={styles.bagContainer}>
            <Pressable
              onPress={() => {}}
              style={{
                ...styles.cart,
                top:
                  Platform.OS === 'ios'
                    ? insets.top
                    : StatusBar?.currentHeight || 0,
              }}>
              <Ionicons
                size={ms(24)}
                color={colors.white}
                name={'cart-outline'}
                maxFontSizeMultiplier={1}
              />
            </Pressable>
            <View style={styles.cartCount}>
              <Text allowFontScaling={false} style={styles.cartCountText}>
                2
              </Text>
            </View>
          </View>
        )}
      </LinearGradient>
    </>
  );
};

export default GradientHeader;
