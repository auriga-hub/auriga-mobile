import React from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  // Pressable,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import useStyles from './useStyles';
import useSearchState from './useHomeState';
import LinearGradient from 'react-native-linear-gradient';
import CustomStatusBar from '../../components/statusBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ROUTER} from '../../navigations/routes';
import FadeInView from '../../components/fadeIn';
import DelayedComponent from '../../components/delayedComponent';

const Home: React.FC<any> = props => {
  const {colors, loading, search, setSearch} = useSearchState(props);
  const styles = useStyles();

  const renderItem = () => {
    return (
      <Pressable
        onPress={() => {
          // props.navigation.navigate(ROUTER.SEARCH);
        }}
        style={styles.item}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          locations={[0.3, 0.7]}
          colors={[colors.primaryDisabled, colors.secondaryDisabled]}
          style={styles.itemGrad}>
          <View style={[styles.itemImgContainer]}>
            <Image
              source={require('../../assets/images/t1.jpg')}
              style={styles.itemImg}
              resizeMethod="resize"
              resizeMode="center"
            />
          </View>
          <View style={styles.itemContent}>
            <Text
              maxFontSizeMultiplier={1}
              adjustsFontSizeToFit
              numberOfLines={2}
              style={styles.company}>
              Personal Care Products
            </Text>
          </View>
        </LinearGradient>
      </Pressable>
    );
  };

  return (
    <FadeInView>
      <CustomStatusBar color={colors.white} barStyle="dark-content" />
      <SafeAreaView style={{...styles.f1, backgroundColor: colors.white}}>
        <FlatList
          stickyHeaderIndices={[0]}
          stickyHeaderHiddenOnScroll
          keyboardShouldPersistTaps="handled"
          numColumns={3}
          ListHeaderComponent={
            <View
              style={{
                backgroundColor: colors.white,
              }}>
              <View style={styles.contentContainer}>
                <Text allowFontScaling={false} style={styles.welcomeText}>
                  Welcome back{' '}
                </Text>
                <Text allowFontScaling={false} style={styles.welcomeText}>
                  User
                </Text>
              </View>
              <View key="search" style={styles.searchContainer}>
                <View style={styles.inputContainer}>
                  <Ionicons
                    size={20}
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
                    style={styles.input}
                    placeholderTextColor={colors.textColor1}
                    placeholder="Search"
                    onSubmitEditing={({nativeEvent: {text}}) => {
                      props.navigation.navigate(ROUTER.SEARCH, {
                        search: text,
                      });
                    }}
                  />
                </View>
              </View>
            </View>
          }
          data={[1, 2, 3, 4, 5, 6]}
          contentContainerStyle={styles.flatListContainer}
          renderItem={renderItem}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              {loading ? (
                <ActivityIndicator color={colors.primary} size="large" />
              ) : (
                <DelayedComponent>
                  <Text
                    maxFontSizeMultiplier={1}
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={styles.noItemText}>
                    No Data Found.
                  </Text>
                </DelayedComponent>
              )}
            </View>
          }
        />
      </SafeAreaView>
    </FadeInView>
  );
};

export default Home;
