import {useTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

import useScale from '../../utils/useScale';

const useGradientHeaderStyles = () => {
  const {colors} = useTheme();
  const {ms} = useScale();
  return StyleSheet.create({
    grad: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    pageTitle: {
      fontSize: ms(18),
      lineHeight: ms(26),
      fontWeight: 'bold',
      color: colors.white,
    },
    cart: {
      position: 'absolute',
      bottom: 0,
      right: '5%',
      alignSelf: 'center',
      justifyContent: 'center',
    },
    back: {
      position: 'absolute',
      bottom: 0,
      left: '5%',
      alignSelf: 'center',
      justifyContent: 'center',
    },
    bagContainer: {
      position: 'absolute',
      right: ms(30),
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cartCount: {
      position: 'absolute',
      right: ms(-10),
      top: ms(25),
      width: ms(20),
      height: ms(20),
      borderRadius: ms(15),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.secondary,
    },
    cartCountText: {
      fontSize: ms(12),
      fontFamily: 'Poppins-Medium',
      lineHeight: ms(18),
      color: colors.white,
    },
  });
};

export default useGradientHeaderStyles;
