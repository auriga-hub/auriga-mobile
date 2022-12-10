import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  CommonActions,
  createNavigationContainerRef,
  DefaultTheme,
  ExtendedTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

import {RootStackParamList, ROUTER} from './routes';
import Colors from '../config/colors';
import TabBar from '../components/tabBar';

import {Text, View} from 'react-native';
import Home from '../screens/home';
import Products from '../screens/products';
import ProductDetail from '../screens/productDetails';

const WIP = () => {
  return (
    <View>
      <Text>WIP</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

export const navigationRef = createNavigationContainerRef();

export function navigate(name: keyof RootStackParamList, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
}

export function onAuthSuccess() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: ROUTER.HOME_COMPONENT,
          },
        ],
      }),
    );
  }
}

export function onLogout() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: ROUTER.HOME_COMPONENT,
          },
        ],
      }),
    );
  }
}

const HomeNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTER.HOME}
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
      }}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name={ROUTER.HOME} component={Home} />
      <Tab.Screen name={ROUTER.PLP} component={Products} />
      <Tab.Screen name={ROUTER.CART} component={WIP} />
      <Tab.Screen name={ROUTER.ACCOUNT} component={WIP} />
    </Tab.Navigator>
  );
};

const RootStack = createStackNavigator<RootStackParamList>();

function AppNavigation() {
  const AppTheme: ExtendedTheme = {
    ...DefaultTheme,
    colors: {
      primary: Colors.PRIMARY,
      secondary: Colors.SECONDARY,
      background: Colors.BACKGROUND,
      card: Colors.PRIMARY,
      text: Colors.TEXT,
      border: Colors.BORDER,
      notification: Colors.TITLE,
      white: Colors.WHITE,
      inputBorder: Colors.INPUT_BORDER,
      textColor1: Colors.TITLE,
      textColor2: Colors.SUB_TITLE,
      textColor3: Colors.PAGE_HEAD,
      textColor4: Colors.TEXT_COLOR,
      primaryDisabled: Colors.PRIMARY_DISABLED,
      secondaryDisabled: Colors.SECONDARY_DISABLED,
    },
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={AppTheme} ref={navigationRef}>
        <RootStack.Navigator
          initialRouteName={ROUTER.HOME_COMPONENT as keyof RootStackParamList}
          screenOptions={{
            headerShown: false,
          }}>
          {/* <RootStack.Screen
            name={ROUTER.SPLASH as keyof RootStackParamList}
            component={Splash}
          /> */}
          <RootStack.Screen
            name={ROUTER.HOME_COMPONENT as keyof RootStackParamList}
            component={HomeNavigation}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name={ROUTER.PRODUCT_DETAILS as keyof RootStackParamList}
            component={ProductDetail}
            options={{headerShown: false}}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppNavigation;
