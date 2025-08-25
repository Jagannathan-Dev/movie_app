import React, { memo, RefObject, useEffect, useRef } from 'react';
import {
  Pressable,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  Platform,
  Animated,
} from 'react-native';

import { Txt } from './customeTxt';
import { colors } from '../../constants/colors';
import styles from '../../styles/styles';

const platform = Platform.OS === 'ios';

interface CustomeInputProps extends TextInputProps {
  label?: string;
  leftIcon?: React.ReactNode;
  error?: string | boolean;
  onPressed?: () => void;
  forgotPasswd?: () => void;
  forgotTxt?: boolean;
  rightIcon?: React.ReactNode;
  value?: string;
  inputRef?: RefObject<TextInput>;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  mandatory?: boolean;
  rightIconPressed?: () => void;
  borderRadius?: number;
  textAlign?: TextInputProps['textAlign'];
  autoFocus?: boolean;
  editable?: boolean;
  height?: number;
  style?: object;
  marginTop1?: number;
  marginTop2?: number;
  errshadowColor?: string;
  paddingHorizontal?: number;
  isBold?: boolean;
  isSemiBold?: boolean;
  txtSize?: number;
  inputmarginTop?: number;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
  paddingVertical?: number;
}

const Input = memo(
  ({
    label,
    leftIcon,
    error,
    onChangeText = () => null,
    onPressed,
    placeholder,
    value,
    inputRef,
    forgotPasswd = () => null,
    forgotTxt,
    rightIcon,
    onFocus = () => null,
    mandatory,
    rightIconPressed,
    borderRadius = 100,
    textAlign,
    autoFocus = false,
    editable = true,
    height = 40,
    style,
    marginTop1 = 15,
    marginTop2 = 7,
    errshadowColor,
    paddingHorizontal = 20,
    paddingVertical = 7,
    isBold = false,
    isSemiBold = false,
    txtSize = 14,
    inputmarginTop = 5,
    backgroundColor = colors?.ghostWhite,
    borderWidth,
    borderColor,
    ...props
  }: CustomeInputProps) => {
    const isError = typeof error === 'string' ? error === 'true' : !!error;

    const shakeAnim = useRef(new Animated.Value(0)).current;

    const shake = () => {
      Animated.sequence([
        Animated.timing(shakeAnim, {
          toValue: 5,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: -5,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
      ]).start();
    };

    useEffect(() => {
      if (error) {
        // shake();
      }
    }, [error]);

    return (
      <View style={{ marginTop: marginTop1 }}>
        {label && (
          <Txt semibold={isSemiBold} size={txtSize} bold={isBold}>
            {label}
            {mandatory && <Text style={{ color: colors.mediumGray }}> *</Text>}
          </Txt>
        )}
        <Animated.View style={{ transform: [{ translateX: shakeAnim }] }}>
          <Pressable
            style={{
              marginTop: inputmarginTop,
              backgroundColor: backgroundColor,
              borderRadius: borderRadius,
              borderWidth: isError ? 1 : borderWidth ? borderWidth : 0,
              borderColor: isError
                ? colors.red
                : borderColor
                ? borderColor
                : colors.jetBlack,
            }}
            disabled={editable}
            onPress={onPressed}
          >
            <View
              style={[
                styles.inputView,
                paddingHorizontal !== undefined
                  ? { paddingHorizontal }
                  : undefined,
                paddingVertical !== undefined ? { paddingVertical } : undefined,
              ]}
            >
              {leftIcon && (
                <View
                  style={{
                    justifyContent: 'center',
                    marginRight: platform ? 6 : 3,
                  }}
                >
                  {leftIcon}
                </View>
              )}

              <View style={{ flex: 1 }}>
                <TextInput
                  editable={editable}
                  autoFocus={autoFocus}
                  onPressIn={onPressed}
                  ref={inputRef}
                  value={value}
                  placeholderTextColor={isError ? colors.red : colors.lightGray}
                  placeholder={placeholder || label}
                  style={[styles.inputTxt, { height, textAlign }, style]}
                  onChangeText={onChangeText}
                  onFocus={onFocus}
                  {...props}
                />
              </View>

              {rightIcon && (
                <View style={{ justifyContent: 'center' }}>
                  <TouchableOpacity
                    onPress={rightIconPressed}
                    style={{ marginLeft: 3 }}
                  >
                    {rightIcon}
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </Pressable>
        </Animated.View>
        {error && error !== 'true' && (
          <Text style={[styles.errorTxt, { marginLeft: 8 }]}>
            {String(error)}
          </Text>
        )}

        {forgotTxt && (
          <Pressable
            style={{ alignSelf: 'flex-end', marginTop: 5 }}
            onPress={forgotPasswd}
          >
            <Txt bold color={colors.red} size={15} textAlign="right">
              Forgot Password?
            </Txt>
          </Pressable>
        )}
      </View>
    );
  },
);

export default Input;
