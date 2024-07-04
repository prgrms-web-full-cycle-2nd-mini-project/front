import { useNavigate } from 'react-router-dom';
import { SignupProps } from '../pages/Signup';
import { useAuthStore } from '../stores/authStore';
import { login, signup } from '../apis/auth.api';

export const useAuth = () => {
  const navigate = useNavigate();
  const { storeLogin } = useAuthStore();

  const userSignup = async (data: SignupProps) => {
    try {
      await signup(data);

      alert('회원가입이 완료되었습니다.');
      navigate('/login');
    } catch (error) {
      console.error('회원가입 오류', error);
    }
  };

  const userLogin = async (data: SignupProps) => {
    try {
      await login(data);

      storeLogin();
      alert('로그인이 완료되었습니다.');
      navigate('/');
    } catch (error) {
      alert('로그인에 실패했습니다.');
      console.error('로그인 실패:', error);
    }
  };

  return {
    userLogin,
    userSignup,
    // userResetPassword,
    // userResetRequest,
    // resetRequested,
  };
};
