import React from 'react';
import AuthCover from '../../components/auth/AuthCover';
import LoginForm from '../../components/auth/LoginForm';
import { BookStyleContainer } from '../../styles/BookStyleStyles';

export default function Login() {
  return (
    <BookStyleContainer>
      <AuthCover />
      <LoginForm />
    </BookStyleContainer>
  );
}
