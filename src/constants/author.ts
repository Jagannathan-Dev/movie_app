import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

export const GET_AUTH_TOKEN = async () => {
  try {
    const Token = await AsyncStorage.getItem('userToken');
    if (Token !== null) {
      return Token;
    } else {
      return null;
    }
  } catch (e) {}
};

export const GET_AUTHTOKEN_DECODE = async () => {
  try {
    const Token = await AsyncStorage.getItem('userToken');
    if (Token !== null) {
      const data = await jwtDecode(Token);
      return data;
    } else {
      return null;
    }
  } catch (e) {}
};
