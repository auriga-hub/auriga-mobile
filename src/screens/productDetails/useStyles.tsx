import {useTheme} from '@react-navigation/native';
import {StyleSheet, useWindowDimensions} from 'react-native';
import useScale from '../../utils/useScale';

function useStyles() {
  const {ms} = useScale();
  const {width, height} = useWindowDimensions();
  const {colors} = useTheme();

  return StyleSheet.create({
    f1: {flex: 1, backgroundColor: colors.background},
    scroll: {
      width: '100%',
    },
    loader: {
      justifyContent: 'center',
      alignItems: 'center',
      height: height - ms(85),
    },
    carouselContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: ms(20),
    },
    carouselItemContainer: {
      flexDirection: 'row',
      borderRadius: ms(26),
      overflow: 'hidden',
      backgroundColor: colors.white,
    },
    banner: {
      borderRadius: ms(26),
      maxHeight: ms(500),
      width: width * 0.85,
      height: width * 0.85,
    },
    indicatorItem: {
      height: ms(5),
      width: ms(30),
      borderRadius: ms(4),
    },
    indicatorContainer: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: ms(28),
      left: 0,
      right: 0,
      overflow: 'hidden',
      paddingVertical: 0,
      paddingHorizontal: 0,
    },
    inactiveDot: {
      backgroundColor: 'white',
    },
    titleContainer: {
      marginTop: ms(30),
      width: '90%',
      alignSelf: 'center',
      paddingVertical: ms(20),
      paddingHorizontal: ms(10),
      borderRadius: ms(10),
      backgroundColor: colors.white,
    },
    title: {
      fontSize: ms(16),
      fontWeight: 'bold',
      color: colors.secondary,
    },
    company: {
      fontSize: ms(14),
      color: colors.text,
    },
    price: {
      fontSize: ms(18),
      fontWeight: 'bold',
      color: colors.primary,
    },
    btnContainer: {
      flexDirection: 'row',
      marginTop: ms(10),
    },
    wishlistBtn: {
      borderRadius: ms(5),
      height: ms(45),
      width: ms(45),
      justifyContent: 'center',
      alignItems: 'center',
    },
    btn: {
      marginLeft: ms(10),
      borderRadius: ms(5),
      height: ms(45),
      justifyContent: 'center',
      alignItems: 'center',
      width: '45%',
    },
    btnText: {
      fontSize: ms(14),
      fontWeight: '500',
      color: colors.white,
    },
    descriptionContainer: {
      marginTop: ms(30),
      width: '90%',
      alignSelf: 'center',
      paddingVertical: ms(20),
      paddingHorizontal: ms(10),
      borderRadius: ms(10),
      marginBottom: ms(30),
      backgroundColor: colors.white,
    },
    descriptionTitle: {
      fontSize: ms(16),
      fontWeight: 'bold',
      marginBottom: ms(5),
      color: colors.primary,
    },
    description: {
      fontSize: ms(14),
      color: colors.border,
    },
    addToCartBtn: {
      backgroundColor: colors.secondary,
    },
    buyNowBtn: {
      backgroundColor: colors.primary,
    },
  });
}

export default useStyles;
