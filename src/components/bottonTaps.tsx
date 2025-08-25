import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  Animated,
  TouchableOpacity,
  Image,
  View,
  ImageProps,
} from 'react-native';
import { colors } from '../constants/colors';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import VectorIcons from './common/icon';
import { Txt } from './common/customeTxt';
import LinearGradient from 'react-native-linear-gradient';
import { responsiveSize } from '../constants/responsiveSize';

type TabButtonProps = {
  item: any;
  index: number;
  onPress?: () => void;
  props: BottomTabBarButtonProps;
  count?: number;
};

export const TabButton = React.memo(({ item, props }: TabButtonProps) => {
  //
  const animatedValues = {
    translate: useRef(new Animated.Value(0)).current,
    scale: useRef(new Animated.Value(0)).current,
  };

  const isSelected = props['aria-selected'] === true;

  const { translate, scale } = animatedValues;

  useEffect(() => {
    handleAnimated();
  }, [isSelected]);

  const handleAnimated = () => {
    Animated.parallel([
      Animated.timing(translate, {
        toValue: isSelected ? 1 : 0,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(scale, {
        toValue: isSelected ? 1 : 0,
        duration: 250,
        useNativeDriver: false,
      }),
    ]).start();
  };

  //
  const translateStyles = {
    transform: [
      {
        translateY: translate.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const scaleStyles = {
    opacity: scale.interpolate({
      inputRange: [0.5, 1],
      outputRange: [0.5, 1],
      extrapolate: 'clamp',
    }),
    transform: [
      {
        scale: scale,
      },
    ],
  };

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Animated.View style={[styles.button, translateStyles, {}]}>
        {/* <Animated.View
          style={[
            {
              position: 'absolute',
            },
            scaleStyles,
          ]}
        >
          <LinearGradient
            style={{
              width: responsiveSize(45),
              height: responsiveSize(45),
              borderRadius: 100,
            }}
            colors={isSelected ? ['#0C85CF', '#223A98'] : ['#fff', '#fff']}
          />
        </Animated.View> */}
        <Image
          source={isSelected ? item?.icon1 : item?.icon2}
          style={{
            resizeMode: 'contain',
            width: responsiveSize(25),
            height: responsiveSize(25),
            tintColor: isSelected ? colors?.secondary : colors?.white,
          }}
        />
      </Animated.View>
      <View style={{ marginTop: 5 }}>
        <Txt
          adjustsFontSizeToFit={true}
          numberOfLines={1}
          color={isSelected ? colors?.secondary : colors?.white}
          regular
          size={10}
        >
          {item?.title}
        </Txt>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  button: {
    width: responsiveSize(50),
    height: responsiveSize(50),
    borderColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0792b3',
    position: 'absolute',
    bottom: 20,
  },
  bottomTabCountView: {
    width: 18,
    height: 18,
    backgroundColor: colors?.secondary,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
