import axios from 'axios';
import apiAuth from './api_auth';

//
export const GET_POPULAR_MOVIES = async (id?: string): Promise<any> => {
  try {
    const res = await apiAuth.get(`movie/popular`);
    return res.data;
  } catch (error: any) {
    throw error?.response?.data || error;
  }
};

export const GET_TRENDING_MOVIES = async (): Promise<any> => {
  try {
    const res = await apiAuth.get(`movie/now_playing`);
    return res.data;
  } catch (e: any) {
    throw e?.response?.data || e;
  }
};

export const GET_MOVIES_DETAILS = async (id?: any): Promise<any> => {
  try {
    const res = await apiAuth.get(`movie/${id}`);
    return res.data;
  } catch (e: any) {
    throw e?.response?.data || e;
  }
};

export const GET_MOVIES_LIST = async (id?: any): Promise<any> => {
  try {
    const res = await apiAuth.get(`movie/${id}`);
    return res.data;
  } catch (e: any) {
    throw e?.response?.data || e;
  }
};
