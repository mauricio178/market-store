import styled from "styled-components";


export const Container = styled.div`
    width: 90vw;
    display: flex;
    background: var(--secondary-color);
    justify-content: centert;
    align-items: center;
    flex-direction: column;
    border-radius: 4px;
    padding: 1em;
    border: 1px solid transparent;
    box-shadow: 4px 4px 2px #353535;

    form {
        div{
            display: flex;
            flex-direction: row;
                input {
                    border: 0px solid ;
                    border-radius: 0.25rem;
                    width: 100%;
                    height: 2rem;
                    padding: 1rem;
                    margin-bottom: 1em;
                    background: var(--text-color-ligth);
                    border: 1px solid transparent;
                    margin-right: 4px;
                    box-shadow: 4px 4px 2px #353535;
                    font-family: sans-serif;
                    font-size: 20px;
                    color: var(--text-color);
                    :hover{
                        cursor: pointer;
                    }
                    :focus {
                    box-shadow: 2px 2px 1px #545454;
                    border: 1px solid transparent;
                    outline: 0;
                    transition: .8s;
                    }  
                }
        }
    }
`;

export const ContainerTitle = styled.div`
    margin-bottom: 1em;
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
        font-size: 24px;
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