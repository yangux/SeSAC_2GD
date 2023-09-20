import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'KBO-Dia-Gothic_bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/KBO-Dia-Gothic_bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'KBO-Dia-Gothic_bold', sans-serif;}
a{
    text-decoration: none;
}
ul,ol {
    list-style: none;
}`;
export default GlobalStyle;
