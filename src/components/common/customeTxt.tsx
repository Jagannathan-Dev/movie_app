import React, { memo, ReactNode } from "react";
import {
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
  StyleProp,
} from "react-native";

import {
  Black,
  Bold,
  Medium,
  Regular,
  SemiBold,
} from "../../constants/txtFonts";
import { colors } from "../../constants/colors";
import { responsiveSize } from "../../constants/responsiveSize";

interface TxtProps extends TextProps {
  children: ReactNode;
  bold?: boolean;
  medium?: boolean;
  regular?: boolean;
  black?: boolean;
  semibold?: boolean;
  size?: number;
  color?: string;
  numberOfLines?: number;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  style?: StyleProp<TextStyle>;
}

export const Txt = memo(
  ({
    children,
    bold,
    medium,
    regular,
    black,
    semibold,
    size = 15,
    color = colors["jetBlack"],
    numberOfLines,
    textAlign = "auto",
    style,
    ...props
  }: TxtProps) => {
    const textStyle: StyleProp<TextStyle> = [
      styles.text,
      bold && styles.bold,
      medium && styles.medium,
      regular && styles.regular,
      black && styles.black,
      semibold && styles.semibold,
      {
        fontSize: responsiveSize(size),
        color,
        textAlign,
      },
      style,
    ];

    return (
      <Text {...props} numberOfLines={numberOfLines} style={textStyle}>
        {children}
      </Text>
    );
  }
);

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontFamily: Medium,
  },
  bold: {
    fontFamily: Bold,
  },
  medium: {
    fontFamily: Medium,
  },
  regular: {
    fontFamily: Regular,
  },
  black: {
    fontFamily: Black,
  },
  semibold: {
    fontFamily: SemiBold,
  },
});
