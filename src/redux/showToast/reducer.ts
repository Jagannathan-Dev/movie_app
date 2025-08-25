import {
  SHOW_TOAST_FAILURE,
  SHOW_TOAST_REQUEST,
  SHOW_TOAST_SUCCESS,
  ShowToastType,
} from "./action";

interface ShowToastState {
  showToastLoad: boolean;
  showToast: {
    visible: boolean;
    type: string;
    message: string;
  };
  showToastErr: any;
}

const initialState: ShowToastState = {
  showToastLoad: false,
  showToast: { visible: false, type: "", message: "" },
  showToastErr: null,
};

const showToastReducer = (
  state = initialState,
  action: ShowToastType
): ShowToastState => {
  switch (action.type) {
    case SHOW_TOAST_REQUEST:
      return { ...state, showToastLoad: true };

    case SHOW_TOAST_SUCCESS:
      return { ...state, showToastLoad: false, showToast: action.payload };

    case SHOW_TOAST_FAILURE:
      return { ...state, showToastLoad: false, showToastErr: action.payload };

    default:
      return state;
  }
};

export default showToastReducer;
