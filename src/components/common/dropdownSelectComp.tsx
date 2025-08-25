import React, { memo } from "react";
import { Pressable, View } from "react-native";
import { styles } from "../../styles/styles";
import { Txt } from "./customeTxt";
import VectorIcons, { iconsName } from "./icon";

interface seleted_props {
  value?: string;
  leftIcon?: any;
  error?: string | null;
  handlePressed?: () => void;
}

const DropdownSelectComp = memo(
  ({ value, leftIcon, error, handlePressed }: seleted_props) => {
    return (
      <View>
        <Pressable onPress={handlePressed}>
          <View
            style={[
              styles?.leaveSelectCompView,
              { borderColor: error ? "#ffb3b3" : "#E0EAFF" },
            ]}
          >
            {leftIcon && (
              <View style={{ justifyContent: "center" }}>{leftIcon}</View>
            )}
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
              <Txt size={13} numberOfLines={1}>
                {value}
              </Txt>
            </View>
            <View style={{ justifyContent: "center" }}>
              <VectorIcons name="down" iconType={iconsName?.AntDesign} />
            </View>
          </View>
        </Pressable>
      </View>
    );
  }
);

export default DropdownSelectComp;
