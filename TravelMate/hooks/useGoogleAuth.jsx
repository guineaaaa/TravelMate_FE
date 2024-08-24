import { useGoogleLogin } from '@react-oauth/google';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useGoogleAuth = () => {
  const [code, setCode] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const navigate = useNavigate();

  // 1. Google 로그인으로 인증 코드 받기
  const googleSocialLogin = useGoogleLogin({
    onSuccess: (response) => setCode(response.code),
    onError: (err) => console.log('로그인 에러:', err),
    flow: 'auth-code',  // 올바른 인증 코드 흐름 사용
  });

  // 2. 인증 코드로 구글에서 액세스 토큰 요청하기
  useEffect(() => {
    if (code) {
      const fetchToken = async () => {
        const data = {
          code: code,
          client_id: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
          client_secret: import.meta.env.VITE_APP_GOOGLE_CLIENT_SECRET,
          redirect_uri: 'http://localhost:5173/login',  
          grant_type: 'authorization_code',
        };

        try {
          const response = await axios.post('https://oauth2.googleapis.com/token', data, {
            headers: { 'Content-Type': 'application/json' },
          });
          setAccessToken(response.data.access_token);
        } catch (err) {
          console.log('액세스 토큰 요청 중 오류:', err);
        }
      };

      fetchToken();
    }
  }, [code]);

  // 3. 서버로 액세스 토큰 전송하기
  useEffect(() => {
    if (accessToken) {
      const sendTokenToServer = async () => {
        try {
          const response = await axios.post('http://3.39.102.140:8080/members/google', {
            token: accessToken,
          });

          if (response.status === 200 && response.data.isSuccess) {
            console.log('구글 로그인 성공');
            navigate('/profilestep1');
          } else {
            console.error('서버 로그인 실패:', response.data.message);
          }
        } catch (err) {
          console.error('서버 로그인 중 오류:', err);
        }
      };

      sendTokenToServer();
    }
  }, [accessToken, navigate]);

  return {
    googleSocialLogin,
  };
};

export default useGoogleAuth;
