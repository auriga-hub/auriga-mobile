import {useTheme} from '@react-navigation/native';
import {StyleSheet, useWindowDimensions} from 'react-native';
import useScale from '../../utils/useScale';

function useStyles() {
  const {ms} = useScale();
  const {width} = useWindowDimensions();
  const {colors} = useTheme();

  return StyleSheet.create({
    flatListContainer: {
      paddingBottom: ms(200),
    },
    searchContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: ms(20),
      paddingBottom: ms(20),
      marginBottom: ms(10),
      paddingHorizontal: '5%',
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
    },
    input: {
      width: '75%',
      paddingLeft: ms(5),
    },
    listItem: {
      overflow: 'hidden',
      alignSelf: 'center',
      marginBottom: ms(15),
      width: '90%',
      height: width * 0.25,
      backgroundColor: colors.white,
      flexDirection: 'row',
    },
    itemCard: {
      borderRadius: ms(4),
      overflow: 'hidden',
    },
    actionContainer: {
      position: 'absolute',
      bottom: ms(10),
      right: ms(10),
    },
    addToCart: {
      height: ms(36),
      borderRadius: ms(5),
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    addToCartText: {
      fontFamily: 'Poppins-Regular',
      fontSize: ms(12),
      lineHeight: ms(18),
    },
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    noItemText: {
      fontFamily: 'Poppins-Regular',
      fontSize: ms(12),
      lineHeight: ms(18),
    },
    mask: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.4)',
      zIndex: 100,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    },
    filter: {
      height: ms(52),
      width: ms(52),
      backgroundColor: '#F1F5F8',
      borderRadius: ms(14),
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: ms(10),
    },
    modalContainer: {
      width: '100%',
      alignSelf: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.6)',
    },
    filterContainer: {
      width: '90%',
      alignSelf: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: ms(20),
      borderRadius: ms(5),
    },
    pickerStyle: {
      backgroundColor: 'white',
      width: '90%',
      height: ms(52),
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: ms(1),
    },
    picker: {
      width: '100%',
      fontFamily: 'Poppins-Medium',
      fontSize: ms(12),
      lineHeight: ms(22),
    },
    pickerItem: {
      fontSize: ms(14),
      fontFamily: 'Poppins-Regular',
    },
    modalBtnContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
      marginTop: ms(25),
    },
    modalBtn: {
      height: ms(44),
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      borderRadius: ms(5),
      marginHorizontal: ms(10),
    },
    modalBtnText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
}

export default useStyles;
