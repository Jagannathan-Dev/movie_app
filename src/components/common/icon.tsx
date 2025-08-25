import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Foundation from "react-native-vector-icons/Foundation";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Zocial from "react-native-vector-icons/Zocial";
import { colors } from "../../constants/colors";

export const iconsName = {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  Feather,
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons,
  SimpleLineIcons,
  Octicons,
  Foundation,
  EvilIcons,
  Fontisto,
  Zocial,
};

type IconComponentType = typeof AntDesign;

interface VectorIconsProps {
  iconType: IconComponentType;
  name: string;
  size?: number;
  color?: string;
}

const VectorIcons: React.FC<VectorIconsProps> = ({
  iconType,
  name,
  size = 20,
  color = colors.jetBlack,
}) => {
  const IconTag = iconType;
  return <IconTag name={name} size={size} color={color} />;
};

export default VectorIcons;
