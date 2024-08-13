import {useGoogleLogin} from '@react-oauth/google';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const useGoogleAuth=()=>{
    const [code, setCode]=useState(null);
    const [accessToken, setAccessToken]=useState(null);
    const navigate=useNavigate();

    // 1회용 auth code 발급하기
    const googleSocialLogin=useGoogleLogin({
        onSuccess:(response)=>setCode(response.code),
        onError: (err)=>console.log(err),
        flow:'auth-code',
    })

    // 받은 code로 Google API 에서 Access Token 요청하기
    useEffect(()=>{
        if(code){
            const data={
                code: code,
                client_id:import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
                client_secret:import.meta.env.VITE_APP_GOOGLE_CLIENT_SECRET,
                redirect_uri:'http://localhost:5173',
                grant_type:'authorization_code',
            }
            axios.post('https://oauth2.googleapis.com/token',data,{
                headers:{'Content-Type':'application/json',},
            })
            .then((response)=>{
                setAccessToken(response.data.access_token);
            })
            .catch((err)=>{
                console.log('access token을 fetching 하는 중 오류', err);
            })
        }
    }, [code])

    // 위에서 받은 access token을 서버로 전송하기
    useEffect(()=>{
        if(accessToken){
            axios.post(`${import.meta.env.VITE_API_BASE_URL}/members/google`,{
                token:accessToken,
            })
            .then((response)=>{
                if(response.status===200){
                    console.log('구글 로그인 성공');
                    navigate('/profilestep1');
                }
            })
            .catch((err)=>{
                console.error('서버 로그인 중 오류', err);
            })
        }
    },[accessToken]);

    return{
        googleSocialLogin,
    }
}
export default useGoogleAuth;