import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import useStyles from './useStyles';

const ProductTile: React.FC<{
  index: number;
  onPress: () => void;
  style?: ViewStyle;
  imgStyle: ImageStyle;
  addToCart?: () => void;
}> = ({index, onPress, style, imgStyle}) => {
  const styles = useStyles();

  return (
    <Pressable key={index} onPress={onPress} style={style}>
      <Image
        source={require('../../assets/images/t2.png')}
        style={imgStyle}
        resizeMethod="scale"
        resizeMode="contain"
      />
      <View style={styles.itemDetails}>
        <View>
          <Text
            maxFontSizeMultiplier={1}
            style={styles.listItemHead}
            numberOfLines={1}>
            Product Title Here
          </Text>
          <Text
            maxFontSizeMultiplier={1}
            style={styles.listItemCompany}
            numberOfLines={1}>
            Company Name Hete
          </Text>
        </View>
        <Text maxFontSizeMultiplier={1} style={styles.listItemAmount}>
          ₹100.00
        </Text>
      </View>
    </Pressable>
  );
};

export default React.memo(ProductTile);
