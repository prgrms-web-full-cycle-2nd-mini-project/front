import { useForm } from 'react-hook-form';
import { SignupProps } from '../../pages/Signup';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import {
  FormTitle,
  FormStyle,
  FieldsetStyle,
  SubmitButton,
  InputStyle,
  SignUpLink,
} from './StyledComponents';
import Typography from '../common/Typography';
import { RightPageContainerStyle } from '../../styles/BookStyleStyles';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
  } = useForm<SignupProps>({
    mode: 'onChange',
  });
  const { userLogin, errorMessage } = useAuth();

  const handleSignup = (data: SignupProps) => {
    userLogin(data);
  };

  return (
    <RightPageContainerStyle>
      <FormTitle $variant="title1">로그인</FormTitle>
      <FormStyle onSubmit={handleSubmit(handleSignup)}>
        <FieldsetStyle>
          <InputStyle
            // 개발용 더미 메일
            defaultValue="apple@banana.carrot"
            type="email"
            placeholder="이메일을 입력해주세요"
            {...register('email', {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
            $isValid={!errors.email}
            $isSubmitted={isSubmitted}
          />
          {isSubmitted && errors.email && (
            <Typography $variant="body1" $color="error">
              올바른 이메일을 입력해주세요
            </Typography>
          )}
        </FieldsetStyle>
        <FieldsetStyle>
          <InputStyle
            // 개발용 더미 메일
            defaultValue="abc123"
            $isSubmitted={isSubmitted}
            $isValid={!errors.password}
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
        </FieldsetStyle>
        <SubmitButton type="submit" disabled={!isValid}>
          시작하기
        </SubmitButton>
        {errorMessage && (
          <Typography $variant="body1" $color="error">
            {errorMessage}
          </Typography>
        )}
      </FormStyle>
      <SignUpLink>
        계정이 없으신가요? <Link to="/signup">회원가입</Link>
      </SignUpLink>
    </RightPageContainerStyle>
  );
}
