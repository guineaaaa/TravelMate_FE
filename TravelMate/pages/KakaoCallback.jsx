import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const KakaoCallback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');

        console.log('KakaoCallback mounted');
        console.log('Authorization code:', code);

        if (code) {
            axios.post('http://3.39.102.140:8080/members/kakao', { code })
                .then((response) => {
                    console.log('Response received:', response);

                    localStorage.setItem('userToken', response.data.token);

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
