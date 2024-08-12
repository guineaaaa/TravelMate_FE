import {createGlobalStyle} from 'styled-components';

const GlobalStyle=createGlobalStyle`
    @font-face {
        font-family: 'Pretendard';
        src: url('../src/fonts/Pretendard-Regular.ttf') format('truetype');
    }

    @font-face {
        font-family: 'BM HANNA_TTF' ;
        src: url('../src/fonts/BM-HANNA_TTF.ttf') format('truetype');
    }
`;

export default GlobalStyle;