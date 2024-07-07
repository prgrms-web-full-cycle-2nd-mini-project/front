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

export const fetchCheckAuth = async () => {
  const response = await axiosInstance.post('/users/auth/check');

  return response.data;
};
