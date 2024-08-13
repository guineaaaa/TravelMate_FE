import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const useKakaoAuth=()=>{
    const REST_API_KEY='백엔드에게 달라 하자1';
    const REDIRECT_URI='벡엔드에게 달라 하자2';
    const link=`https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const loginHandler=()=>{
        window.location.href=link;
    };

}

export default useKakaoAuth;