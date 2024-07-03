import React from "react";
import AuthCover from "../../components/auth/AuthCover";
import LoginForm from "../../components/auth/LoginForm";
import { SignupStyle } from "../Signup/index";

export default function Login() {
  return (
    <SignupStyle>
      <AuthCover />
      <LoginForm />
    </SignupStyle>
  );
}
