  
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --background: #3A6EA5;
        --background-ligth: #FF6700;
        --secondary-color: #C0C0C0;
        --primary-color: #9d9d9d;
        --title-color: #222823;
        --text-color: #08090A;
        --text-color-ligth: #c9c9c9;
        --alert-color: #a22222;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Calibri', sans-serif;
    }
`;