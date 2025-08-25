import React from "react";
import { ActivityIndicator, Pressable, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { Txt } from "./customeTxt";
import { colors } from "../../constants/colors";
import { styles } from "../../styles/styles";

interface props {
  colorGredient?: string;
  buttonVisible?: boolean;
  label: string;
  handlePressed?: () => void;
  txtColor?: string;
  borderWidth?: number;
  loading?: boolean;
  borderRadius?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
}

const BasicButton = ({
  colorGredient,
  buttonVisible = true,
  label,
  handlePressed,
  txtColor,
  borderWidth,
  loading = false,
  borderRadius = 5,
  paddingVertical = 7,
  paddingHorizontal = 10,
}: props) => {
  // const ColorGradient = colorGredient
  //   ? colorGredient
  //   : buttonVisible
  //   ? [colors?.buttonColor, colors?.buttonColor]
  //   : [colors?.white, colors?.white];

  const ColorGradient = colorGredient
    ? colorGredient
    : buttonVisible
    ? "#0C85CF"
    : colors?.white;

  const TextColor = txtColor
    ? txtColor
    : buttonVisible
    ? colors.white
    : "#0C85CF";
  const BorderVisible = borderWidth ? borderWidth : !buttonVisible ? 1.2 : 0;
  const BorderColor = buttonVisible ? colors?.white : "#0C85CF";

  return (
    <View>
      <Pressable
        onPress={handlePressed}
        style={({ pressed }) => [
          styles.customButtonView,
          {
            borderRadius,
            borderColor: BorderColor,
            borderWidth: BorderVisible,
            backgroundColor: ColorGradient,
            elevation: pressed ? 10 : 0,
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.2,
            shadowRadius: 2,
            marginTop: 10,
            paddingVertical: 5,
            shadowColor: pressed ? colors.primary : "#fff",
          },
        ]}
      >
        <View
          style={{ paddingVertical, alignItems: "center", paddingHorizontal }}
        >
          <View style={{ flexDirection: "row" }}>
            <Txt
              numberOfLines={1}
              adjustsFontSizeToFit={true}
              bold
              color={TextColor}
            >
              {label}
            </Txt>
            {loading && <ActivityIndicator size={"small"} color={TextColor} />}
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default BasicButton;
