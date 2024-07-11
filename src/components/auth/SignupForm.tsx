import React from 'react';
import { useForm } from 'react-hook-form';
import { SignupProps } from '../../pages/Signup';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import Typography from '../common/Typography';
import {
  FormTitle,
  FormStyle,
  FieldsetStyle,
  SubmitButton,
  InputStyle,
  SignUpLink,
} from './StyledComponents';
import { RightPageContainerStyle } from '../../styles/BookStyleStyles';

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
  } = useForm<SignupProps>({
    mode: 'onChange',
  });
  const { userSignup, errorMessage } = useAuth();

  const handleSignup = (data: SignupProps) => {
    userSignup(data);
  };

  return (
    <RightPageContainerStyle>
      <FormTitle $variant="title1">회원가입</FormTitle>
      <FormStyle onSubmit={handleSubmit(handleSignup)}>
        <FieldsetStyle>
          <InputStyle
            type="email"
            placeholder="이메일을 입력해주세요"
            {...register('email', {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
            $isSubmitted={isSubmitted}
            $isValid={!errors.email}
          />
          {isSubmitted && errors.email && (
            <Typography $variant="body1" $color="error">
              올바른 이메일을 입력해주세요
            </Typography>
          )}
        </FieldsetStyle>
        <FieldsetStyle>
          <InputStyle
            $isValid={!errors.password}
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register('password', {
              required: true,
              minLength: 6,
            })}
            $isSubmitted={isSubmitted}
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
        </FieldsetStyle>
        <SubmitButton type="submit" disabled={!isValid}>
          가입하기
        </SubmitButton>
        {errorMessage && (
          <Typography $variant="body1" $color="error">
            {errorMessage}
          </Typography>
        )}
      </FormStyle>
      <SignUpLink>
        계정이 없으신가요? <Link to="/login">로그인</Link>
      </SignUpLink>
    </RightPageContainerStyle>
  );
}
