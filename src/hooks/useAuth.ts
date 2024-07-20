import { useNavigate } from 'react-router-dom';
import { SignupProps } from '../pages/Signup';
import { useAuthStore } from '../stores/authStore';
import {
  fetchCheckAuth,
  fetchEmailAuth,
  fetchLogin,
  fetchLogout,
  fetchSignup,
} from '../apis/auth.api';
import { useState } from 'react';

/* 
TODO: 중복메일 확인
TODO: 회원가입 안되는 이유 알려주기(비번 체크 다름, 이메일 형식 다름 등등)
TODO: 로그아웃
   */

export const useAuth = () => {
  const navigate = useNavigate();
  const { storeLogin, storeLogout } = useAuthStore();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const verifyAuth = async () => {
    try {
      await fetchCheckAuth();
      storeLogin();
      navigate('/');
    } catch (error) {
      navigate('/login');
      // console.log('error', error);
      storeLogout();
    }
  };

  const verifyEmail = async (email: string) => {
    try {
      await fetchEmailAuth(email);

      setErrorMessage(null);
    } catch (error: any) {
      if (error.status === 400) {
        setErrorMessage('중복된 이메일입니다');
      }
    }
  };

  const userSignup = async (data: SignupProps) => {
    try {
      await fetchSignup(data);

      alert('회원가입이 완료되었습니다.');
      navigate('/login');
    } catch (error) {
      console.error('회원가입 오류', error);
      setErrorMessage('회원가입에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  const userLogin = async (data: SignupProps) => {
    try {
      await fetchLogin(data);

      storeLogin();
      navigate('/');
    } catch (error) {
      console.error('로그인 실패:', error);
      setErrorMessage('아이디와 비밀번호를 확인해 주세요.');
    }
  };

  const userLogout = async () => {
    try {
      await fetchLogout();
      storeLogout();
      navigate('/login');
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  return {
    userLogin,
    userLogout,
    userSignup,
    errorMessage,
    setErrorMessage,
    verifyAuth,
    verifyEmail,
    // userResetPassword,
    // userResetRequest,
    // resetRequested,
  };
};
