export const MOVIES_LIST_REQUEST = 'MOVIES_LIST_REQUEST';
export const MOVIES_LIST_SUCCESS = 'MOVIES_LIST_SUCCESS';
export const MOVIES_LIST_FAILURE = 'MOVIES_LIST_FAILURE';

interface requestProps {
  type: typeof MOVIES_LIST_REQUEST;
  payload?: string | any;
  [key: string]: any;
}

interface successProps {
  type: typeof MOVIES_LIST_SUCCESS;
  payload?: any;
  [key: string]: any;
}

interface failureProps {
  type: typeof MOVIES_LIST_FAILURE;
  payload?: any;
  [kay: string]: any;
}

export const movieListRequest = (payload?: any): requestProps => {
  return {
    type: MOVIES_LIST_REQUEST,
    payload,
  };
};

export const movieListSuccess = (payload: any): successProps => {
  return {
    type: MOVIES_LIST_SUCCESS,
    payload,
  };
};

export const movieListFailre = (payload: any): failureProps => {
  return {
    type: MOVIES_LIST_FAILURE,
    payload,
  };
};

export type MovieListType = requestProps | successProps | failureProps;
