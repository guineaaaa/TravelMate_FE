import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const useLogin=()=>{
    const [loading, setIsLoading]=useState(false);
    const [error,setError]=useState(null);
    const [data, setData]=useState(null);
    const navigate=useNavigate();

    const login=async(email, password)=>{
        setIsLoading(true);
        setError(null);

        try{
            const response=await axios.post('http://3.39.102.140:8080/members/login',{
                email,
                password
            })
            if(response.status===200){
                setData(response.data);
                console.log(response.data);
                localStorage.setItem('data',response.data);
                alert('로그인이 정상적으로 처리되었습니다');
                navigate('/');
            }           
        }
        catch(err){
            setError(err.response.data || '에러');
        }
        setIsLoading(false);
    }
    return{
        login,
        loading,
        error,
        data
    }

}

export default useLogin;