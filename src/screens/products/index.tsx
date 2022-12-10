/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  TextInput,
  RefreshControl,
  Modal,
  Pressable,
  useWindowDimensions,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Picker} from '@react-native-picker/picker';

import GradientHeader from '../../components/header/gradientHeader';
import useStyles from './useStyles';
import ProductTile from '../../components/productTile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FadeInView from '../../components/fadeIn';
import DelayedComponent from '../../components/delayedComponent';
import {useTheme} from '@react-navigation/native';
import useScale from '../../utils/useScale';
import {ROUTER} from '../../navigations/routes';

const Products: React.FC<any> = props => {
  const {width, height} = useWindowDimensions();
  const {colors} = useTheme();
  const [filterOpen, setFilterOpen] = useState(false);
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [isSearching] = useState(false);
  const [loading] = useState(false);
  const [products] = useState([]);
  const {ms} = useScale();
  const styles = useStyles();

  const companies: any[] = [];
  const categories: any[] = [];

  const renderItem = ({index}: any) => {
    return (
      <ProductTile
        index={index}
        onPress={() => {
          props.navigation.navigate(ROUTER.PRODUCT_DETAILS);
        }}
        style={{
          ...styles.listItem,
          ...styles.itemCard,
        }}
        imgStyle={{
          width: width * 0.25,
          height: '100%',
        }}
      />
    );
  };

  return (
    <FadeInView>
      <GradientHeader
        title="Products"
        showBack
        onPressBack={() => {
          props.navigation.goBack();
        }}
      />
      <SafeAreaView style={{backgroundColor: colors.background}}>
        <Modal
          visible={filterOpen}
          statusBarTranslucent={true}
          animationType="slide"
          transparent={true}
          onDismiss={() => {
            setFilterOpen(false);
          }}
          onRequestClose={() => {
            setFilterOpen(false);
          }}>
          <View style={styles.modalContainer}>
            <View
              style={{
                ...styles.filterContainer,
                backgroundColor: colors.white,
              }}>
              <View
                style={{
                  ...styles.pickerStyle,
                  borderBottomColor: colors.border,
                }}
                key="company-view">
                <Picker
                  key="company"
                  mode="dialog"
                  selectedValue={company}
                  style={{...styles.picker, color: colors.text}}
                  onValueChange={itemValue => {
                    setCompany(itemValue);
                  }}>
                  <Picker.Item
                    label="Select Company"
                    value=""
                    key="placeholder company"
                    style={{...styles.pickerItem}}
                  />
                  {companies.map((item: any) => {
                    return (
                      <Picker.Item
                        label={item.label}
                        value={item.value}
                        key={'company' + item.value}
                        style={{...styles.pickerItem}}
                      />
                    );
                  })}
                </Picker>
              </View>
              <View
                style={{
                  ...styles.pickerStyle,
                  borderBottomColor: colors.border,
                }}
                key="group-view">
                <Picker
                  key="type"
                  mode="dialog"
                  selectedValue={category}
                  style={{...styles.picker, color: colors.text}}
                  onValueChange={itemValue => {
                    setCategory(itemValue);
                  }}>
                  <Picker.Item
                    label="Select Category"
                    value=""
                    key="placeholder category"
                    style={{...styles.pickerItem}}
                  />
                  {categories.map((item: any) => {
                    return (
                      <Picker.Item
                        label={item.label}
                        value={item.value}
                        key={'company' + item.value}
                        style={{...styles.pickerItem}}
                      />
                    );
                  })}
                </Picker>
              </View>
              <View style={styles.modalBtnContainer}>
                <Pressable
                  style={{
                    ...styles.modalBtn,
                    backgroundColor: colors.primaryDisabled,
                  }}>
                  <Text
                    maxFontSizeMultiplier={1}
                    style={{...styles.modalBtnText, color: colors.white}}>
                    Clear
                  </Text>
                </Pressable>
                <Pressable
                  style={{
                    ...styles.modalBtn,
                    backgroundColor: colors.secondary,
                  }}>
                  <Text
                    maxFontSizeMultiplier={1}
                    style={{...styles.modalBtnText, color: colors.white}}>
                    Apply
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <FlatList
          keyboardShouldPersistTaps="handled"
          data={[1, 2, 3]}
          contentContainerStyle={styles.flatListContainer}
          stickyHeaderIndices={[0]}
          stickyHeaderHiddenOnScroll
          ListHeaderComponent={
            <View
              key="search"
              style={{
                ...styles.searchContainer,
                backgroundColor: colors.white,
              }}>
              <View style={styles.inputContainer}>
                <Ionicons
                  size={ms(20)}
                  color={'#B0B0B0'}
                  name="search"
                  allowFontScaling={false}
                  maxFontSizeMultiplier={1}
                />
                <TextInput
                  maxFontSizeMultiplier={1}
                  value={search}
                  onChangeText={text => {
                    setSearch(text);
                  }}
                  style={{...styles.input, color: colors.textColor1}}
                  placeholderTextColor={colors.textColor1}
                  placeholder="Search"
                />
              </View>
              <Pressable
                style={styles.filter}
                onPress={() => {
                  setFilterOpen(!filterOpen);
                }}>
                <MaterialCommunityIcons
                  name="tune"
                  size={ms(20)}
                  color="#B1C0C9"
                />
              </Pressable>
            </View>
          }
          renderItem={renderItem}
          ListEmptyComponent={
            loading || isSearching ? (
              <View style={{...styles.emptyContainer, height: height * 0.4}}>
                <ActivityIndicator size="large" color={colors.primary} />
              </View>
            ) : (
              <DelayedComponent>
                <View
                  style={{...styles.emptyContainer, height: height - ms(200)}}>
                  <Text
                    allowFontScaling={false}
                    style={{...styles.noItemText, color: colors.text}}>
                    No Items Found
                  </Text>
                </View>
              </DelayedComponent>
            )
          }
          onEndReached={() => {}}
          refreshControl={
            <RefreshControl
              refreshing={loading && products.length > 0}
              colors={[colors.primary]}
              onRefresh={() => {}}
            />
          }
        />
      </SafeAreaView>
    </FadeInView>
  );
};

export default Products;
