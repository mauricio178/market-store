import styled from 'styled-components'

type ContainerType = {
    visible: boolean
}

export const Container = styled.div<ContainerType>`
    justify-content: center;
    align-items: center;
    display:flex;
    position: absolute;
    width: 100%;
    top: ${props => props.visible ? '0' :  '-100%'};
    margin-top: 1em;
    transition: all 0.5s;
    border-radius: 8px;
     :hover {
         top: 0;
         filter: brightness(0.9);
     }

    `;

export const Content = styled.div`
    justify-content: center;
    align-items: center;
    display:flex;
    width: 345px;
    height: 6vh;
    border: 0px solid transparent;
    border-radius: 8px;
    box-shadow: 4px 4px 2px #353535;
    
    `;

export const ContainerText = styled.div`
    border-radius: 8px;
    background: var(--alert-color);
    justify-content: center;
    align-items: center;
    display: flex;    
    width: 100%;
    height: 100%;
    color: var(--text-color-ligth);
    font-size: 18px;
    font-family: sans-serif;

`;