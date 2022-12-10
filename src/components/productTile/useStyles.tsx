import {useTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import useScale from '../../utils/useScale';

function useStyles() {
  const {ms} = useScale();
  const {colors} = useTheme();

  return StyleSheet.create({
    itemDetails: {
      width: '65%',
      marginVertical: ms(5),
      marginLeft: ms(15),
    },
    listItemHead: {
      fontSize: ms(13),
      fontFamily: 'Raleway-SemiBold',
      lineHeight: ms(15),
      marginBottom: ms(2),
      color: colors.text,
    },
    listItemCompany: {
      fontSize: ms(10),
      fontFamily: 'Raleway-Medium',
      lineHeight: ms(14),
      color: '#071F5D',
    },
    listItemAmount: {
      fontSize: ms(13),
      fontFamily: 'OpenSans-Bold',
      lineHeight: ms(18),
      color: colors.text,
    },
  });
}

export default useStyles;
