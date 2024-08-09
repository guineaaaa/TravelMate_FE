import React,{useEffect,useNavigate} from 'react';
import axios from 'axois';

// 백엔드와 연결...
const Redirection=()=>{
    const code=window.location.search;
    const navigate=useNavigate();

    useEffect(()=>{
        console.log(process.env.REACT_APP_URL);

        axios.post(`${process.env.REACT_APP_URL}kakaoLogin${code}`)
        .then((r)=>{
            console.log(r.data);

            //토큰을 받아서 localStorage에 저장하는 코드
            localStorage.setItem('name', r.data.user_name);
            // 일단 이름만 저장
            navigate('/profilestep1');
        })
    },[]);

    return <div>로그인 중 입니다.</div>

}

export default Redirection;