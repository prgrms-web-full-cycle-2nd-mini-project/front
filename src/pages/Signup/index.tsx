import React from 'react';
import styled from 'styled-components';
import SignupForm from '../../components/auth/SignupForm';
import AuthCover from '../../components/auth/AuthCover';

export interface SignupProps {
  email: string;
  password: string;
}

export default function Signup() {
  return (
    <SignupStyle>
      <AuthCover />
      <SignupForm />
    </SignupStyle>
  );
}

export const SignupStyle = styled.main`
  display: flex;
  min-height: 600px;
  height: 80vh;
  max-height: 800px;
  justify-content: space-between;
  align-items: center;
  /* margin: 80px auto; */
  background-color: #f9f9f9;
  outline: 1px solid #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
