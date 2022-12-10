import {useTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import useScale from '../../utils/useScale';

function useStyles() {
  const {ms} = useScale();
  const {colors} = useTheme();

  return StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      width: '100%',
      flexDirection: 'row',
      height: ms(73),
      borderTopWidth: ms(0.5),
      backgroundColor: colors.white,
      borderTopColor: colors.border,
    },
    innerContainer: {
      flexDirection: 'row',
      alignSelf: 'center',
    },
    home: {
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      alignSelf: 'center',
      height: ms(68),
      width: ms(68),
      borderRadius: ms(80),
      bottom: ms(39),
    },
    item: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      alignSelf: 'center',
    },
    tabBtn: {
      marginHorizontal: ms(5),
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    maskedView: {
      flex: 1,
      flexDirection: 'row',
      height: ms(26),
    },
    icon: {width: ms(26), height: ms(26)},
    flex1: {flex: 1},
  });
}

export default useStyles;
