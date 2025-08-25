import React from "react";
import { View } from "react-native";
import ScreensIndex from ".";
import { useDispatch, useSelector } from "react-redux";
// import { showToastRequest } from "../redux/showToast/action";
import Notify from "../components/notify";
import { showToastRequest } from "../redux/showToast/action";

const AuthIndex = () => {
  //
  const dispatch = useDispatch();
  const { showToast, showToastErr } = useSelector((s: any) => s.showToast);

  const handleshowToast = (vis: boolean, type: string, message: string) => {
    dispatch(showToastRequest({ visible: vis, type, message }));
  };

  return (
    <View style={{ flex: 1 }}>
      <ScreensIndex />
      <Notify
        visible={showToast?.visible}
        type={showToast?.type}
        message={showToast?.message}
        onHide={() => handleshowToast(false, "", "")}
      />
    </View>
  );
};

export default AuthIndex;
