  
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --background: #2c2c2c;
        --background-ligth: #445b99;
        --secondary-color: #9e9e9e;
        --primary-color: #dcdcdc;
        --title-color: #222823;
        --text-color: #08090A;
        --text-color-ligth: #c9c9c9;
        --alert-color: #9d2d2d;
        --font-family: 'Calibri'
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Calibri', sans-serif;
    }
`;