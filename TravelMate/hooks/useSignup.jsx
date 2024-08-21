import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useSignup = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const navigate = useNavigate();

    const signup = (email, password) => {
        setIsLoading(true);
        setError(null);

        fetch('http://3.39.102.140:8080/members/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => {
            if (response.ok) {
                return response.json();  // JSON 형식의 응답 본문을 파싱
            }
            return response.json().then(err => {
                throw new Error(err.message || '회원가입 실패');  
            });
        })
        .then(data => {
            const { isSuccess, message, result } = data;

            if (isSuccess) {
                setData(result);
                alert('회원가입이 정상적으로 처리되었습니다.');
                navigate('/login');
            } else {
                setError(message || '회원가입 실패');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            setError(error.message || '알 수 없는 오류 발생');
        })
        .finally(() => {
            setIsLoading(false);
        });
    };

    return {
        signup,
        isLoading,
        error,
        data,
    };
};

export default useSignup;
