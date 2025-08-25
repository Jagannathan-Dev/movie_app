import React, { FC, memo, useEffect, useRef } from "react";
import {
  Animated,
  KeyboardAvoidingView,
  Modal,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
  Platform,
  StyleSheet,
} from "react-native";

import { height } from "../../constants/dimensions";
import { colors } from "../../constants/colors";

interface PopupModalProps {
  visible: boolean;
  loading?: boolean;
  onRequestClose?: () => void;
  children: React.ReactNode;
}

const PopupModal: FC<PopupModalProps> = memo(
  ({ visible, onRequestClose = () => {}, children, loading = true }) => {
    const animationRef = useRef(new Animated.Value(-height)).current;

    useEffect(() => {
      if (visible) {
        animateIn();
      } else {
        animationRef.setValue(-height);
      }
    }, [visible]);

    const animateIn = () => {
      Animated.timing(animationRef, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    };

    const animateOut = (callback?: () => void) => {
      Animated.timing(animationRef, {
        toValue: -height,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        callback?.();
      });
    };

    return (
      <Modal
        visible={visible}
        onRequestClose={() => {
          if (loading) {
            animateOut(onRequestClose);
          }
        }}
        transparent
        animationType="fade"
      >
        <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
          {/* <TouchableWithoutFeedback onPress={() => animateOut(onRequestClose)}> */}
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.5)",
              justifyContent: "center",
            }}
          >
            {/* <TouchableWithoutFeedback> */}
            <Animated.View
              style={{
                backgroundColor: colors.white,
                padding: 20,
                borderRadius: 10,
                margin: 25,
                transform: [{ translateY: animationRef }],
              }}
            >
              <View>{children}</View>
            </Animated.View>
            {/* </TouchableWithoutFeedback> */}
          </SafeAreaView>
          {/* </TouchableWithoutFeedback> */}
        </KeyboardAvoidingView>
      </Modal>
    );
  }
);

export default PopupModal;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
});
