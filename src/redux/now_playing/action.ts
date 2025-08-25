export const NOW_PLAYING_REQUEST = 'NOW_PLAYING_REQUEST';
export const NOW_PLAYING_SUCCESS = 'NOW_PLAYING_SUCCESS';
export const NOW_PLAYING_FAILURE = 'NOW_PLAYING_FAILURE';

interface requestProps {
  type: typeof NOW_PLAYING_REQUEST;
  payload?: string | any;
  [key: string]: any;
}

interface successProps {
  type: typeof NOW_PLAYING_SUCCESS;
  payload?: any;
  [key: string]: any;
}

interface failureProps {
  type: typeof NOW_PLAYING_FAILURE;
  payload?: any;
  [kay: string]: any;
}

export const nowPlayingRequest = (payload?: any): requestProps => {
  return {
    type: NOW_PLAYING_REQUEST,
    payload,
  };
};

export const nowPlayingSuccess = (payload: any): successProps => {
  return {
    type: NOW_PLAYING_SUCCESS,
    payload,
  };
};

export const nowPlayingFailre = (payload: any): failureProps => {
  return {
    type: NOW_PLAYING_FAILURE,
    payload,
  };
};

export type NowPlayingType = requestProps | successProps | failureProps;
