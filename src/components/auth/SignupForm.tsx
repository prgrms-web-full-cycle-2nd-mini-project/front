import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { SignupProps } from "../../pages/Signup";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignupProps>({
    mode: "onChange",
  });
  const { userSignup } = useAuth();

  const handleSignup = (data: SignupProps) => {
    userSignup(data);
  };

  return (
    <SignupFormStyle>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit(handleSignup)}>
        <fieldset>
          <InputStyle
            type="email"
            placeholder="이메일을 입력해주세요"
            {...register("email", {
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
            {...register("password", {
              required: true,
              minLength: 6,
            })}
          />
          {errors.password && (
            <ErrorMessage>비밀번호는 6자 이상이어야 합니다</ErrorMessage>
          )}
        </fieldset>
        <button type="submit" disabled={!isValid}>
          가입하기
        </button>
      </form>
      <SignUpLink>
        계정이 없으신가요? <Link to="/login">로그인</Link>
      </SignUpLink>
    </SignupFormStyle>
  );
}

export const SignupFormStyle = styled.div`
  width: 600px;
  padding: 40px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin-bottom: 20px;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  fieldset {
    border: none;
    margin: 10px 0;
    width: 80%;
  }

  button {
    width: 50%;
    padding: 10px;
    background-color: black;
    border: none;
    border-radius: 100px;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    margin-top: 20px;
  }

  button:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
  }
`;

export const InputStyle = styled.input<{ isValid: boolean }>`
  width: 100%;
  padding: 10px;
  border: none;

  background-color: inherit;
  border-bottom: ${(props) =>
    props.isValid ? "1px solid #ccc" : "1px solid crimson"};
  font-size: 16px;
  margin-bottom: 5px;
  transition: border-bottom 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.isValid ? "#333" : "crimson")};
  }
`;

export const ErrorMessage = styled.div`
  color: crimson;
  font-size: 14px;
  margin-top: 5px;
`;

export const SignUpLink = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #888;

  a {
    color: #000;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
`;
