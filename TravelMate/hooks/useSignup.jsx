import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useSignup = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const navigate = useNavigate();

    const signup = async (email, password) => {
        setIsLoading(true);
        setError(null);

        try {
            const requestBody = {
                email,
                password,
            };

            const response = await axios.post(
                'http://3.39.102.140:8080/members/signup',
                requestBody
            );

            if (response.status === 200) {
                const { isSuccess, code, message, result } = response.data;

                if (isSuccess) {
                    setData(result);
                    console.log("회원가입 성공");
                    alert('회원가입이 정상적으로 처리되었습니다.');
                    navigate('/login');
                } else {
                    setError(message || '회원가입 실패');
                }
            } else {
                setError('회원가입 실패');
            }
        } catch (err) {
            if (err.response) {
                console.log('서버 오류', err.response.data);
                setError(err.response.data.message || '서버 오류');
            } else if (err.request) {
                console.error('네트워크 오류', err.request);
                setError('서버와 연결 실패');
            } else {
                console.error('오류 발생', err.message);
                setError('알 수 없는 오류 발생');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return {
        signup,
        isLoading,
        error,
        data,
    };
};

export default useSignup;
