import React from 'react';
import { useForm } from 'react-hook-form';
import { SignupProps } from '../../pages/Signup';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { InputStyle, SignUpLink, SignupFormStyle } from './SignupForm';
import Typography from '../common/Typography';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
  } = useForm<SignupProps>({
    mode: 'onChange',
  });
  const { userLogin } = useAuth();

  const handleSignup = (data: SignupProps) => {
    userLogin(data);
  };

  return (
    <SignupFormStyle>
      <Typography $variant="title1">로그인</Typography>
      <form onSubmit={handleSubmit(handleSignup)}>
        <fieldset>
          <InputStyle
            // 개발용 더미 메일
            defaultValue="apple@banana.carrot"
            type="email"
            placeholder="이메일을 입력해주세요"
            {...register('email', {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
            isValid={!errors.email}
            isSubmitted={isSubmitted}
          />
          {isSubmitted && errors.email && (
            <Typography $variant="body1" $color="error">
              올바른 이메일을 입력해주세요
            </Typography>
          )}
        </fieldset>
        <fieldset>
          <InputStyle
            // 개발용 더미 메일
            defaultValue="abc123"
            isSubmitted={isSubmitted}
            isValid={!errors.password}
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register('password', {
              required: true,
              minLength: 6,
            })}
          />
          {isSubmitted && errors.password ? (
            <Typography $variant="body1" $color="error">
              비밀번호는 6자 이상이어야 합니다
            </Typography>
          ) : (
            <Typography $variant="body1" $color="gray50">
              비밀번호는 6자 이상이어야 합니다
            </Typography>
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
