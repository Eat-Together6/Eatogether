import { createGlobalStyle } from "styled-components";
import BMHANNAPro from "assets/fonts/BMHANNAPro.ttf";
import BMHANNAAir from "assets/fonts/BMHANNAAir_ttf.ttf";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        border: 0;
        box-sizing:border-box;
        text-decoration: none;
        color: inherit;
        font-family: 'BMHANNAPro';
    }

    @font-face {
        font-family: 'BMHANNAPro';
        src: url(${BMHANNAPro}) format('woff');
        font-weight: normal;
        font-style: normal;
        }

    @font-face {
        font-family: 'BMHANNAAir';
        src: url(${BMHANNAAir}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;

export default GlobalStyle;