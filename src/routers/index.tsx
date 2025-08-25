import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AfterScreens } from './stackScreens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'react-native';
import SplashScreens from '../components/splashScreen';
import { navigationRef } from '../constants/navigationRef';
import WelcomeScreens from '../components/welcomeScreen';

const ScreensIndex = () => {
  const dispatch = useDispatch();

  // const socket = io("https://udhyogam.unnatiblr.org", {
  //   path: "/api/socket.io",
  // });

  const appState = useRef(AppState.currentState);

  const [splashScreen, setSplashScreen] = useState(true);
  const [welcomeScreen, setWelcomeScreen] = useState(false);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
      }
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });
    return () => {
      subscription.remove();
    };
  }, []);

  useLayoutEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 2300);
    AsyncStorage.getItem('welScreen').then(res => {
      if (res === null) {
        setWelcomeScreen(true);
      }
    });
  }, []);

  const handleSkip = async () => {
    try {
      await AsyncStorage.setItem('welScreen', JSON.stringify(false));
      setWelcomeScreen(false);
    } catch (e) {}
  };

  return (
    <NavigationContainer ref={navigationRef}>
      {splashScreen ? (
        <SplashScreens />
      ) : welcomeScreen ? (
        <WelcomeScreens visible={welcomeScreen} handleSkip={handleSkip} />
      ) : (
        <AfterScreens />
      )}
    </NavigationContainer>
  );
};

export default ScreensIndex;
