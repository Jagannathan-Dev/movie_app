import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  Pressable,
  View,
} from 'react-native';
import { Txt } from './customeTxt';
import { colors } from '../../constants/colors';
import { Gradient } from '../../constants/gradient';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../styles/styles';

interface CustomButtonProps {
  colorGredient?: string[];
  buttonVisible?: boolean;
  label: string;
  handlePressed?: (event: GestureResponderEvent) => void;
  txtColor?: string;
  borderWidth?: number;
  loading?: boolean;
  borderRadius?: number;
  paddingVertical?: number;
  borderColor_?: string;
  paddingHorizontal?: number;
  txtSize?: number;
  regular?: boolean;
  semibold?: boolean;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  colorGredient,
  buttonVisible = true,
  label,
  handlePressed,
  txtColor,
  borderWidth,
  borderColor_,
  loading = false,
  borderRadius = 100,
  paddingVertical = 14,
  paddingHorizontal = 10,
  txtSize = 20,
  regular = false,
  semibold = true,
  disabled = false,
}) => {
  // Final gradient colors
  const gradientColors = colorGredient || Gradient['PrimaryColor'];

  // Text color
  const textColor = txtColor || (buttonVisible ? colors.white : colors.primary);

  // Border color
  const finalBorderColor =
    borderColor_ || (buttonVisible ? colors.white : colors.primary);

  // Border width
  const finalBorderWidth = borderWidth ?? (buttonVisible ? 0 : 1);

  return (
    <View style={{ marginTop: 10 }}>
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 1.0, y: 1.0 }}
        colors={gradientColors}
        style={[
          styles.customButtonView,
          {
            borderRadius,
            borderColor: finalBorderColor,
            borderWidth: finalBorderWidth,
          },
        ]}
      >
        <Pressable disabled={disabled} onPress={handlePressed}>
          <View
            style={{
              paddingVertical,
              paddingHorizontal,
              alignItems: 'center',
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Txt
                numberOfLines={1}
                adjustsFontSizeToFit
                color={textColor}
                size={txtSize}
                semibold={semibold}
                regular={regular}
              >
                {label}
              </Txt>
              {loading && (
                <ActivityIndicator
                  size="small"
                  color={textColor}
                  style={{ marginLeft: 8 }}
                />
              )}
            </View>
          </View>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

export default CustomButton;
