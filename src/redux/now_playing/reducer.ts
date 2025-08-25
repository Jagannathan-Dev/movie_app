import {
  NOW_PLAYING_FAILURE,
  NOW_PLAYING_REQUEST,
  NOW_PLAYING_SUCCESS,
  NowPlayingType,
} from './action';

interface props {
  playingLoad: boolean;
  nowPlaying: any;
  playingErr: any;
}

const initialState: props = {
  playingLoad: false,
  nowPlaying: {},
  playingErr: null,
};

const nowPlayingReducer = (state = initialState, action: NowPlayingType) => {
  switch (action.type) {
    case NOW_PLAYING_REQUEST:
      return { ...state, playingLoad: true };
    case NOW_PLAYING_SUCCESS:
      return { ...state, playingLoad: false, nowPlaying: action.payload };
    case NOW_PLAYING_FAILURE:
      return { ...state, playingLoad: false, playingErr: action.payload };
    default:
      return state;
  }
};

export default nowPlayingReducer;
