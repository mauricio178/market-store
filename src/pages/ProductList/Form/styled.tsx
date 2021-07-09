import styled from "styled-components";


export const Container = styled.div`
    width: 90vw;
    height: 480px;
    display: flex;
    background: var(--secondary-color);
    justify-content: centert;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    padding: 1em;
    border: 1px solid transparent;
    box-shadow: 4px 4px 2px #353535;
`;

export const ContainerTitle = styled.div`
    margin-bottom: 1em;
    margin-top: 6em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90vw;
    top: 0;
    background: transparent;

    div {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }

    h1 {
        font-family: sans-serif;
        color: var(--title-color);
    }

    button {
        padding: 2px 22px;
        font-size: 16px;
        font-family: sans-serif;
        border-radius: 4px;
        border: none;
        background: var(--background-ligth);
        color: #ffffff;    
        box-shadow: 0px 5px 0px #383838;
        transition: position  0.2s;
        &:active {
            position: relative;
            top: 3px;
            box-shadow: 0px 2px 0px #383838;
        }    
        &:hover{
            filter: brightness(.8);
            transition: .6s;
            cursor: pointer;
        }
    }
`;