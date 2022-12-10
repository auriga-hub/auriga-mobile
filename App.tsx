import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Orientation from 'react-native-orientation-locker';
import SplashScreen from 'react-native-splash-screen';

import UserNav from './src/navigations';
import Colors from './src/config/colors';

function App(): JSX.Element {
  useEffect(() => {
    Orientation.lockToPortrait();
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.backgroundStyle}>
        <UserNav />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
});

export default App;
