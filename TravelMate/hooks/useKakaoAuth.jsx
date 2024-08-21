const useKakaoAuth = () => {
    const REDIRECT_URI = encodeURIComponent('http://localhost:5173/kakao/callback');
    const clientId = import.meta.env.VITE_APP_KAKAO_REST_API;

    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const loginHandler = () => {
        window.location.href = link;
    }

    return { loginHandler };
}

export default useKakaoAuth;
