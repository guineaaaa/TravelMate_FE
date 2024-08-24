import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const KakaoCallback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');

        console.log('KakaoCallback mounted');
        console.log('Authorization code:', code);

        if (code) {
            const clientId = import.meta.env.VITE_APP_KAKAO_REST_API;
            const REDIRECT_URI = 'http://localhost:5173/kakao/callback';

            const formData = new URLSearchParams();
            formData.append('grant_type', 'authorization_code');
            formData.append('client_id', clientId);
            formData.append('redirect_uri', REDIRECT_URI);
            formData.append('code', code);

            axios.post('https://kauth.kakao.com/oauth/token', formData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
            .then((tokenResponse) => {
                const accessToken = tokenResponse.data.access_token;
                console.log('Access Token:', accessToken);

                // accessToken을 쿼리 파라미터로 서버에 전달하기
                return axios.post(`http://3.39.102.140:8080/members/kakao?accessToken=${accessToken}`);
            })
            .then((response) => {
                console.log('Response received:', response);

                // 서버로부터 받은 accessToken 및 기타 정보 저장
                localStorage.setItem('userToken', response.data.result.accessToken);

                navigate('/profilestep1');
            })
            .catch((error) => {
                console.error('카카오 로그인 중 에러', error);
            });
        }
    }, [navigate]);

    return null;
};

export default KakaoCallback;
