import {useTheme} from '@react-navigation/native';
import {StyleSheet, useWindowDimensions} from 'react-native';
import useScale from '../../utils/useScale';

function useStyles() {
  const {ms} = useScale();
  const {colors} = useTheme();
  const {width} = useWindowDimensions();

  return StyleSheet.create({
    f1: {
      flex: 1,
    },
    flatListContainer: {
      paddingBottom: ms(200),
    },
    searchContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: ms(10),
      paddingBottom: ms(20),
      backgroundColor: colors.white,
    },
    search: {
      alignSelf: 'center',
      marginRight: ms(20),
    },
    inputContainer: {
      flexDirection: 'row',
      backgroundColor: '#F1F5F8',
      height: ms(52),
      alignItems: 'center',
      paddingHorizontal: ms(10),
      borderRadius: ms(14),
      width: '90%',
    },
    input: {
      width: '75%',
      paddingLeft: ms(5),
      color: colors.textColor1,
    },
    emptyContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    noItemText: {
      fontFamily: 'Raleway-Medium',
      fontSize: ms(14),
      paddingRight: ms(10),
      color: colors.text,
    },
    contentContainer: {
      width: '90%',
      alignSelf: 'center',
      paddingVertical: ms(10),
    },
    welcomeText: {
      fontSize: ms(24),
      lineHeight: ms(37),
      width: '70%',
      fontWeight: 'bold',
      color: colors.primary,
    },
    item: {
      flex: 1,
      marginHorizontal: ms(10),
      marginVertical: ms(10),
      marginBottom: ms(10),
    },
    itemGrad: {
      borderRadius: ms(5),
      paddingHorizontal: ms(5),
      paddingVertical: ms(10),
      backgroundColor: colors.primaryDisabled,
      alignItems: 'center',
      height: width * 0.2 + ms(55),
    },
    itemImgContainer: {
      zIndex: 10,
      borderRadius: ms(5),
      overflow: 'hidden',
      borderWidth: ms(1),
      height: width * 0.2,
      backgroundColor: colors.white,
      borderColor: colors.primary,
    },
    itemContent: {
      width: '100%',
      marginTop: ms(5),
    },
    l20: {
      left: ms(20),
    },
    r20: {
      right: ms(20),
    },
    itemImg: {
      borderRadius: ms(5),
      height: width * 0.2,
      width: width * 0.2,
    },
    company: {
      fontSize: ms(12),
      fontWeight: '500',
      color: colors.primary,
      textAlign: 'center',
    },
    mv5: {
      marginVertical: ms(5),
    },
  });
}

export default useStyles;
