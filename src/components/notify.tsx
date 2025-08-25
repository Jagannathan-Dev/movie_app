import React, { useLayoutEffect, useRef } from "react";
import { StyleSheet, Animated } from "react-native";
import { Txt } from "./common/customeTxt";
import { colors } from "../constants/colors";

export type ToastType = "success" | "error" | "warning";

type NotifyProps = {
  type?: ToastType;
  message?: string;
  visible: boolean;
  onHide?: () => void;
};

const Notify: React.FC<NotifyProps> = React.memo(
  ({ type = "success", message = "", visible, onHide }) => {
    const toastOpacity = useRef(new Animated.Value(0)).current;

    const backgroundColor =
      {
        success: "#00cc00",
        error: "#cc0000",
        warning: "#FF9800",
      }[type] || "#333";

    const translateY = toastOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [-30, 0],
    });

    useLayoutEffect(() => {
      let timeout: NodeJS.Timeout;

      if (visible) {
        Animated.timing(toastOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();

        timeout = setTimeout(() => {
          Animated.timing(toastOpacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start(() => {
            onHide?.();
          });
        }, 1000);
      }

      return () => clearTimeout(timeout);
    }, [visible]);

    if (!visible) return null;

    return (
      <Animated.View
        style={[
          styles.toast,
          {
            backgroundColor,
            opacity: toastOpacity,
            transform: [{ translateY }],
          },
        ]}
      >
        <Txt bold color={colors?.white} textAlign="center">
          {message}
        </Txt>
      </Animated.View>
    );
  }
);

const styles = StyleSheet.create({
  toast: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    padding: 12,
    borderRadius: 8,
    zIndex: 1000,
    elevation: 5,
  },
});

export default Notify;
