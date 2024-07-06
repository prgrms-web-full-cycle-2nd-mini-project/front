import React from 'react';
import SignupForm from '../../components/auth/SignupForm';
import AuthCover from '../../components/auth/AuthCover';
import BookStyleContainer from '../../components/common/BookStyleContainer';

export interface SignupProps {
  email: string;
  password: string;
}

export default function Signup() {
  return (
    <BookStyleContainer>
      <AuthCover />
      <SignupForm />
    </BookStyleContainer>
  );
}
