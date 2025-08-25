import React, { FC, useEffect, useRef } from "react";
import {
  Animated,
  Modal,
  Pressable,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { Txt } from "../common/customeTxt";
import { colors } from "../../constants/colors";
import VectorIcons, { iconsName } from "./icon";

interface ConfirmModalProps {
  visible: boolean;
  handleDisable: () => void;
  handlePressed: () => void;
  title: string;
  label: string;
  rightTxt?: string;
  leftTxt?: string;
  iconN?: string;
  iconT?: any;
}

const ConfirmModal: FC<ConfirmModalProps> = ({
  visible,
  handleDisable,
  handlePressed,
  title,
  label,
  rightTxt = "Yes",
  leftTxt = "No",
  iconN = "info",
  iconT = iconsName.Octicons,
}) => {
  const animationRef = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) handleAnimation();
  }, [visible]);

  const handleAnimation = () => {
    animationRef.setValue(0);
    Animated.timing(animationRef, {
      useNativeDriver: true,
      duration: 300,
      toValue: 1,
    }).start();
  };

  const handleDismiss = (callback: () => void) => {
    Animated.timing(animationRef, {
      useNativeDriver: true,
      duration: 200,
      toValue: 0,
    }).start(() => callback());
  };

  const scale = animationRef.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={() => handleDismiss(handleDisable)}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableWithoutFeedback>
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.5)",
              justifyContent: "center",
            }}
          >
            <TouchableWithoutFeedback>
              <Animated.View
                style={{
                  backgroundColor: colors.white,
                  padding: 14,
                  borderRadius: 10,
                  margin: 15,
                  transform: [{ scale }],
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <VectorIcons
                    name={iconN}
                    iconType={iconT}
                    color={colors.primary}
                  />
                  <View
                    style={{
                      flex: 1,
                      marginLeft: 10,
                      justifyContent: "center",
                    }}
                  >
                    <Txt bold>{title}</Txt>
                    <View style={{ marginTop: 10 }}>
                      <Txt>{label}</Txt>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 15,
                    justifyContent: "flex-end",
                  }}
                >
                  <Pressable onPress={() => handleDismiss(handleDisable)}>
                    <View style={{ paddingHorizontal: 10 }}>
                      <Txt bold>{leftTxt}</Txt>
                    </View>
                  </Pressable>
                  <Pressable onPress={() => handleDismiss(handlePressed)}>
                    <View style={{ paddingHorizontal: 10 }}>
                      <Txt bold color={colors.primary}>
                        {rightTxt}
                      </Txt>
                    </View>
                  </Pressable>
                </View>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </Modal>
  );
};

export default ConfirmModal;
