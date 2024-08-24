import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post('http://3.39.102.140:8080/members/login', {
                email,
                password
            });

            if (response.status === 200) {
                const { accessToken, refreshToken } = response.data.result;

                // 토큰 저장
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);

                // 로그인 성공 처리
                setData(response.data);
                console.log(response.data);
                alert('로그인이 정상적으로 처리되었습니다');
                
                // 메인 페이지로 이동
                navigate('/');
            }
        } catch (err) {
            setError(err.response?.data || '에러');
        }

        setIsLoading(false);
    };

    // 로그아웃 시 토큰 삭제히기
    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setData(null);
        navigate('/login');
    };
    
    // 토큰 존재 여부로 로그인 상태 확인
    const isLoggedIn = () => {
        return !!localStorage.getItem('accessToken');
    };

    return {
        login,
        logout,
        isLoggedIn,
        loading,
        error,
        data
    };
};

export default useLogin;
