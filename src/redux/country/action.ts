export const COUNTRY_REQUEST = "COUNTRY_REQUEST";
export const COUNTRY_SUCCESS = "COUNTRY_SUCCESS";
export const COUNTRY_FAILURE = "COUNTRY_FAILURE";

interface requestProps {
  type: typeof COUNTRY_REQUEST;
  payload?: string | any;
  [key: string]: any;
}

interface successProps {
  type: typeof COUNTRY_SUCCESS;
  payload?: any;
  [key: string]: any;
}

interface failureProps {
  type: typeof COUNTRY_FAILURE;
  payload?: any;
  [kay: string]: any;
}

export const countryRequest = (payload?: any): requestProps => {
  return {
    type: COUNTRY_REQUEST,
    payload,
  };
};

export const countrySuccess = (payload: any): successProps => {
  return {
    type: COUNTRY_SUCCESS,
    payload,
  };
};

export const countryFailre = (payload: any): failureProps => {
  return {
    type: COUNTRY_FAILURE,
    payload,
  };
};

export type CountryType = requestProps | successProps | failureProps;
