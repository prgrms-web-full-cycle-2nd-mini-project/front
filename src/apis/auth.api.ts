import axios from 'axios';
import { SignupProps } from '../pages/Signup';
import axiosInstance from './axiosInstance';

export const fetchSignup = async (userData: SignupProps) => {
  const response = await axiosInstance.post('/users/register', userData);

  return response.data;
};

export const fetchLogin = async (userData: SignupProps) => {
  const response = await axiosInstance.post('/users/login', userData);

  return response.data;
};

export const fetchLogout = async () => {
  const response = await axiosInstance.post('/users/logout');

  return response.data;
};

export const fetchCheckAuth = async () => {
  const response = await axiosInstance.post('/users/auth/check');

  return response.data;
};

export const fetchEmailAuth = async (email: string) => {
  try {
    const response = await axiosInstance.post('/users/email/check', { email });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response;
    }
  }
};
