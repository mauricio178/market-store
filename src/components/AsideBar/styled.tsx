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
    opacity: 0.7;
    width: 16em;
    left: ${props => props.visible ? '0' : '-100%'};
    transition: all 0.8s;
`;
