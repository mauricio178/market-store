import styled from 'styled-components'

type ContainerType = {
    visible: boolean
}

export const Container = styled.div<ContainerType>`
    width: 4em;
    background: #484848;
    transition: all 0.6;
    z-index: 200;
    margin-left: 60em;
    height: 16em;
    position: fixed;
    width: 12em;
    border-radius: 8px;
    box-shadow: 0px 3px 0px;
    top: ${props => props.visible ? '0' : '-100%'};
    transition: all 0.8s;

    header {
        background: var(--secondary-color);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 4em;

        button {
            background: transparent;
            border: 0px solid transparent;
            border-radius: 8px;
            :hover {
                cursor: pointer;
                opacity: 0.7;
                background: gray;
                transition: 0.5s;
            }
        }
    }

    body {
        
        div{
            margin-top: 0.25em;
            :hover{
                filter: brightness(0.9);
                background: #545454;
        }
        a {
                padding: 8px ; 
                display: flex;
                align-items: center;
                color: var(--text-color-ligth);
                flex-direction: row;
                font-size: 16px;
                text-decoration:none; 
                font-family: 'Calibri';
                :hover {
                    opacity: 0.8;
                    transition: 0.2s;
                    margin-left: 4px;
                }
                svg {
                    color: var(--seconday-color);
                    font-size: 24px;
                    margin-right: 0.25em;
                }
            }   
        }

    }

`;