import React, { useEffect, useRef } from "react";
import {
  Animated,
  Modal,
  PanResponder,
  StyleSheet,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const screenHeight = Dimensions.get("window").height;

interface BottomSheetProps {
  visible: boolean;
  handleDismiss?: () => void;
  children: React.ReactNode;
}

const BottomSheetModal: React.FC<BottomSheetProps> = ({
  visible,
  handleDismiss,
  children,
}) => {
  const translateY = useRef(new Animated.Value(screenHeight)).current;

  const openSheet = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeSheet = () => {
    Animated.timing(translateY, {
      toValue: screenHeight,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      handleDismiss?.();
    });
  };

  useEffect(() => {
    if (visible) openSheet();
    else closeSheet();
  }, [visible]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dy > 0) {
          translateY.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dy > 100) {
          closeSheet();
        } else {
          openSheet();
        }
      },
    })
  ).current;

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={closeSheet}
    >
      <TouchableWithoutFeedback onPress={closeSheet}>
        <View style={styles.backdrop} />
      </TouchableWithoutFeedback>

      <Animated.View
        style={[
          styles.sheet,
          {
            transform: [{ translateY }],
          },
        ]}
        // {...panResponder.panHandlers}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>{children}</View>
        </TouchableWithoutFeedback>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  sheet: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: screenHeight * 0.9,
  },
  content: {
    padding: 20,
  },
});

export default BottomSheetModal;
