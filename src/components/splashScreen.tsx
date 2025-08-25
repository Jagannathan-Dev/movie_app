import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, View } from 'react-native';

import { Txt } from './common/customeTxt';
import { colors } from '../constants/colors';
import imgReq from '../constants/imgReq';
import { responsiveSize } from '../constants/responsiveSize';
import styles from '../styles/styles';

const SplashScreens = ({ dismiss = () => null }) => {
  const scale = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const autoZoom = () => {
      Animated.parallel([
        Animated.sequence([
          Animated.timing(scale, {
            toValue: 10,
            duration: 1500,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: 0,
            duration: 800,
            useNativeDriver: true,
            delay: 1200,
          }),
        ]),
      ]).start(() => {
        dismiss();
        setLoading(false);
      });
    };
    autoZoom();
  }, [scale]);

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Animated.Image
          style={{
            width: responsiveSize(250),
            height: responsiveSize(250),
            resizeMode: 'contain',
            // opacity: opacity,
          }}
          source={imgReq.app_icon}
        />
      </View>
      {loading && (
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
            backgroundColor: colors?.white,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Animated.View
            style={{
              width: 200,
              height: 200,
              backgroundColor: colors?.primary,
              borderRadius: 100,
              transform: [{ scale }],
              opacity: opacity,
            }}
          />
          <View style={{ position: 'absolute' }}>
            <Image
              source={imgReq?.app_icon}
              style={{
                width: responsiveSize(250),
                height: responsiveSize(250),
                resizeMode: 'contain',
              }}
            />
          </View>
        </Animated.View>
      )}
    </View>
  );
};

export default SplashScreens;
