import {
  COUNTRY_FAILURE,
  COUNTRY_REQUEST,
  COUNTRY_SUCCESS,
  CountryType,
} from "./action";

interface props {
  countryLoad: boolean;
  country: any;
  countryErr: any;
}

const initialState: props = {
  countryLoad: false,
  country: [],
  countryErr: null,
};

const countryReducer = (state = initialState, action: CountryType) => {
  switch (action.type) {
    case COUNTRY_REQUEST:
      return { ...state, countryLoad: true };
    case COUNTRY_SUCCESS:
      return { ...state, countryLoad: false, country: action.payload };
    case COUNTRY_FAILURE:
      return { ...state, countryLoad: false, countryErr: action.payload };
    default:
      return state;
  }
};

export default countryReducer;
