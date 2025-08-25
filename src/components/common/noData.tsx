import React from "react";
import { Image, View } from "react-native";

import { responsiveSize } from "../../constants/responsiveSize";
import { Txt } from "./customeTxt";
import imgReq from "../../constants/imgReq";
import { styles } from "../../styles/styles";

const NoData = ({ lable = "No Data Found" }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Image
          source={imgReq?.nodata}
          style={{
            width: responsiveSize(250),
            height: responsiveSize(250),
            resizeMode: "contain",
          }}
        />
      </View>
      <View>
        <Txt textAlign={"center"} bold>
          {lable}
        </Txt>
      </View>
    </View>
  );
};

export default NoData;
