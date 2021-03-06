import styled from 'styled-components'

type ContainerType = {
    visible: boolean
}

export const Container = styled.div<ContainerType>`
    width: 4em;
    background: #484848;
    transition: all 0.6;
    z-index: 200;
    height: 100%;
    position: fixed;
    width: 16em;
    left: ${props => props.visible ? '0' : '-100%'};
    transition: all 0.8s;

    header{
        background: var(--secondary-color);
        display: flex;
        justify-content: space-between;
        height: 4em;
        align-items: center;

        img {
            margin-left: 2em;
            width: 100px;
            height: 50px;
        }
    }

    body {
        
        div{
            background: transparent;
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
                font-size: 22px;
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
                    margin: 1em;
                }
            }   
        }

    }

    button{
        background: transparent;
        border: 0px solid transparent;
        margin-top: 1em;
        border-radius: 8px;
        :hover {
            opacity: 0.8;
            background: gray;
            cursor: pointer;
            transition: 0.4s;
        }
    }
`;
