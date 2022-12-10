import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Pressable,
  ActivityIndicator,
  Image,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

import GradientHeader from '../../components/header/gradientHeader';
import useStyles from './useStyles';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const ProductDetail: React.FC<any> = props => {
  const {colors} = useTheme();
  const [loading] = useState(false);
  const [product] = useState({
    key: 'value',
  });
  const styles = useStyles();

  const content =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  return (
    <>
      <SafeAreaView style={styles.f1}>
        <GradientHeader
          title="Product Details"
          showBack
          onPressBack={() => {
            props.navigation.goBack();
          }}
        />
        {loading ? (
          <View style={[styles.scroll, styles.loader]}>
            <ActivityIndicator color={colors.primary} size="large" />
          </View>
        ) : !product ? (
          <View style={[styles.scroll, styles.loader]}>
            <Text>No Product Details Found</Text>
          </View>
        ) : (
          <ScrollView>
            <View style={styles.carouselContainer}>
              <View style={styles.carouselItemContainer}>
                <Image
                  source={{uri: 'logo'}}
                  style={styles.banner}
                  resizeMethod="resize"
                  resizeMode="contain"
                />
              </View>
            </View>
            <View style={styles.titleContainer}>
              <Text maxFontSizeMultiplier={1} style={styles.title}>
                Product Name
              </Text>

              <Text maxFontSizeMultiplier={1} style={styles.company}>
                Company/Group
              </Text>
              <Text maxFontSizeMultiplier={1} style={styles.price}>
                ₹100.00
              </Text>
              <View style={styles.btnContainer}>
                <Pressable
                  onPress={() => {}}
                  style={[styles.btn, styles.addToCartBtn]}>
                  <Text
                    maxFontSizeMultiplier={1}
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    style={styles.btnText}>
                    ADD TO CART
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => {}}
                  style={[styles.btn, styles.buyNowBtn]}>
                  <Text
                    maxFontSizeMultiplier={1}
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    style={styles.btnText}>
                    BUY NOW
                  </Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.descriptionContainer}>
              <Text maxFontSizeMultiplier={1} style={styles.descriptionTitle}>
                Description
              </Text>
              <Text maxFontSizeMultiplier={1} style={styles.description}>
                {content}
              </Text>
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
};

export default ProductDetail;
