import { SignupProps } from "../pages/Signup";
import axiosInstance from "./axiosInstance";

export const signup = async (userData: SignupProps) => {
  const response = await axiosInstance.post("/users/register", userData);

  return response.data;
};

export const login = async (userData: SignupProps) => {
  const response = await axiosInstance.post("/users/login", userData);

  return response.data;
};
