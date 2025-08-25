import React from "react";
import { FlatList, Keyboard, Pressable, View } from "react-native";
import { Txt } from "../common/customeTxt";
import { styles } from "../../styles/styles";
import { colors } from "../../constants/colors";
import VectorIcons, { iconsName } from "./icon";

type ItemType = {
  [key: string]: any;
};

interface Props {
  data: ItemType[];
  keyName: string;
  handleSelectItem: (item: ItemType) => void;
  selectList?: string[];
}

const Dropdown: React.FC<Props> = ({
  data,
  keyName,
  handleSelectItem,
  selectList = [],
}) => {
  const newData = data?.map((item) => {
    const { [keyName]: value, ...rest } = item;
    return {
      labelName: value,
      ...rest,
    };
  });

  return (
    <View>
      <FlatList
        keyboardShouldPersistTaps="always"
        style={styles.DropdownSearchCartView}
        nestedScrollEnabled
        data={newData}
        keyExtractor={(_, i) => i.toString()}
        ListEmptyComponent={
          <View style={{ alignItems: "center", paddingVertical: 8 }}>
            <Txt color={colors.red} bold>
              No Data
            </Txt>
          </View>
        }
        renderItem={({ item, index }) => {
          const isSelected = selectList.includes(item?.labelName);
          const isLast = index === newData.length - 1;

          return (
            <Pressable
              onPress={() => {
                handleSelectItem(item);
                Keyboard.dismiss();
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? colors.semilightGray
                    : isSelected
                    ? colors.semilightGray
                    : colors.white,
                },
              ]}
            >
              <View
                style={[
                  styles.DropdownSearchDataView,
                  { borderBottomWidth: isLast ? 0 : 1 },
                ]}
              >
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <Txt size={13}>{item.labelName}</Txt>
                  </View>
                  {isSelected && (
                    <VectorIcons
                      name="check"
                      color={colors.primary}
                      iconType={iconsName.AntDesign}
                    />
                  )}
                </View>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default Dropdown;
