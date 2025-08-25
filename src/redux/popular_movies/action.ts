export const POPULAR_MOVIES_REQUEST = 'POPULAR_MOVIES_REQUEST';
export const POPULAR_MOVIES_SUCCESS = 'POPULAR_MOVIES_SUCCESS';
export const POPULAR_MOVIES_FAILURE = 'POPULAR_MOVIES_FAILURE';

interface requestProps {
  type: typeof POPULAR_MOVIES_REQUEST;
  payload?: string | any;
  [key: string]: any;
}

interface successProps {
  type: typeof POPULAR_MOVIES_SUCCESS;
  payload?: any;
  [key: string]: any;
}

interface failureProps {
  type: typeof POPULAR_MOVIES_FAILURE;
  payload?: any;
  [kay: string]: any;
}

export const popularMovieRequest = (payload?: any): requestProps => {
  return {
    type: POPULAR_MOVIES_REQUEST,
    payload,
  };
};

export const popularMovieSuccess = (payload: any): successProps => {
  return {
    type: POPULAR_MOVIES_SUCCESS,
    payload,
  };
};

export const popularMovieFailre = (payload: any): failureProps => {
  return {
    type: POPULAR_MOVIES_FAILURE,
    payload,
  };
};

export type PopularType = requestProps | successProps | failureProps;
