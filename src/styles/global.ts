import {createGlobalStyle} from "styled-components";

export const GlobalStyle  = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

    :root{
        --white: #fff;
        --yellow-maize: #F7E84A;
        --black: #000;
        --black-jet: #2C2C2C;
        --red-pantone: #EF233C;
        --green-malachite: #40DD77;
        --blue-azure: #2483F0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
    * {
        box-sizing: border-box;
        list-style: none;
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif; 
    }

    body{
        background-color: var(--black-jet);
        color: var(--white);
    }
`