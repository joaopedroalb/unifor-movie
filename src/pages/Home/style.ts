import styled from "styled-components";

interface HeaderProps {
    readonly image: any
}



export const Page = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Header = styled.header<HeaderProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;

    h1{
        font-size: calc(15px + 15vw);
        text-align: center;
        font-family: 'Bebas Neue', cursive;
        letter-spacing: 4px;
        background: url(${props => props.image});
        background-position: center;
        background-clip:text;
        -webkit-background-clip:text;
        color: transparent;
    }
`