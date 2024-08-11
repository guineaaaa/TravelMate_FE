import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const useSignup=()=>{
    // 요청이 진행 중인지
    const [isLoading, setIsLoading]=useState(false);

    // 요청 중 발생한 오류 관리
    const [error, setError]=useState(null);

    // 성공적으로 응답 받은 데이터 저장
    const [data, setData]=useState(null);

    const navigate=useNavigate();

    const signup=async(email, password)=>{
        setIsLoading(true);
        setError(null);

        try{
            const response=await axios.post('http://15.165.194.140/mebers/signup' ,{
                email,
                password
            })
            if(response.status===200){
                setData(response.data);
                console.log(response.data);
                alert('회원가입이 정상적으로 처리되었습니다.');
                navigate('/login');
            }
        }catch(err){
            setError(err.response ? err.response.data : "에러 발생");
        }finally{
            setIsLoading(false);
        }
    }
    return{
        signup,
        isLoading,
        error,
        data,
    }

}
export default useSignup;