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
import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { fetchEmailAuth } from '../../apis/auth.api';

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
    watch,
  } = useForm<SignupProps>({
    mode: 'onChange',
  });
  const { userSignup, errorMessage, verifyEmail } = useAuth();

  const handleSignup = (data: SignupProps) => {
    userSignup(data);
  };

  const email = watch('email');

  return (
    <RightPageContainerStyle>
      <FormTitle $variant="title1">회원가입</FormTitle>
      <FormStyle onSubmit={handleSubmit(handleSignup)}>
        <FieldsetStyle>
          <EmailStyle>
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
            <button type="button" onClick={() => verifyEmail(email)}>
              중복확인
            </button>
          </EmailStyle>
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

const EmailStyle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  :first-child {
    width: 100%;
  }
  button {
    width: 100px;
    background-color: ${COLORS.secondary};
    color: ${COLORS.white};
    border-radius: 30px;
  }
`;
