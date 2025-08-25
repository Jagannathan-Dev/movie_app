export const SHOW_TOAST_REQUEST = "SHOW_TOAST_REQUEST";
export const SHOW_TOAST_SUCCESS = "SHOW_TOAST_SUCCESS";
export const SHOW_TOAST_FAILURE = "SHOW_TOAST_FAILURE";

interface requestProps {
  type: typeof SHOW_TOAST_REQUEST;
  payload?: string | any;
  [key: string]: any;
}

interface successProps {
  type: typeof SHOW_TOAST_SUCCESS;
  payload?: any;
  [key: string]: any;
}

interface failureProps {
  type: typeof SHOW_TOAST_FAILURE;
  payload?: any;
  [kay: string]: any;
}

export const showToastRequest = (payload: any): requestProps => {
  return {
    type: SHOW_TOAST_REQUEST,
    payload,
  };
};

export const showToastSuccess = (payload: any): successProps => {
  return {
    type: SHOW_TOAST_SUCCESS,
    payload,
  };
};

export const showToastFailre = (payload: any): failureProps => {
  return {
    type: SHOW_TOAST_FAILURE,
    payload,
  };
};

export type ShowToastType = requestProps | successProps | failureProps;
