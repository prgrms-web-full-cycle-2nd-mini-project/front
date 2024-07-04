import React from 'react';
import { useForm } from 'react-hook-form';
import { SignupProps } from '../../pages/Signup';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import {
  ErrorMessage,
  InputStyle,
  SignUpLink,
  SignupFormStyle,
} from './SignupForm';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignupProps>({
    mode: 'onChange',
  });
  const { userLogin } = useAuth();

  const handleSignup = (data: SignupProps) => {
    userLogin(data);
  };

  return (
    <SignupFormStyle>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit(handleSignup)}>
        <fieldset>
          <InputStyle
            type="email"
            placeholder="이메일을 입력해주세요"
            {...register('email', {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
            isValid={!errors.email}
          />
          {errors.email && (
            <ErrorMessage>올바른 이메일을 입력해주세요</ErrorMessage>
          )}
        </fieldset>
        <fieldset>
          <InputStyle
            isValid={!errors.password}
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register('password', {
              required: true,
              minLength: 6,
            })}
          />
          {errors.password && (
            <ErrorMessage>비밀번호는 6자 이상이어야 합니다</ErrorMessage>
          )}
        </fieldset>
        <button type="submit" disabled={!isValid}>
          시작하기
        </button>
      </form>
      <SignUpLink>
        계정이 없으신가요? <Link to="/signup">회원가입</Link>
      </SignUpLink>
    </SignupFormStyle>
  );
}
