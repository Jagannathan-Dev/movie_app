import React, { memo } from "react";
import { Pressable, View } from "react-native";
import { colors } from "../../constants/colors";
import { Txt } from "./customeTxt";

interface props {
  title?: string;
  leftIconPressed?: () => void;
  rightIconPressed?: () => void;
  leftIcon?: any;
  rightIcon?: any;
}

const PageHeader = memo(
  ({
    title,
    leftIconPressed,
    rightIconPressed,
    leftIcon,
    rightIcon,
  }: props) => {
    return (
      <View>
        <View
          style={{
            minHeight: 70,
            backgroundColor: colors?.primary,
            paddingHorizontal: 20,
            justifyContent: "center",
          }}
        >
          <Txt textAlign="center" color={colors.white} bold size={18}>
            {title}
          </Txt>
        </View>
        {leftIconPressed && (
          <View
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              justifyContent: "center",
              left: 20,
            }}
          >
            <View style={{ justifyContent: "center" }}>
              <Pressable onPress={leftIconPressed}>{leftIcon}</Pressable>
            </View>
          </View>
        )}
        {rightIconPressed && (
          <View
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              justifyContent: "center",
              right: 20,
            }}
          >
            <View style={{ justifyContent: "center" }}>
              <Pressable onPress={rightIconPressed}>{rightIcon}</Pressable>
            </View>
          </View>
        )}
      </View>
    );
  }
);

export default PageHeader;
