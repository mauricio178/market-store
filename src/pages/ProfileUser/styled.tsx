import styled from 'styled-components'

export const Container = styled.div`
height: 480px;
width: 480px;
top: 0;
border: 1px solid transparent;
border-radius: 8px;
justify-content: start;
display: flex;
background: var(--secondary-color);
flex-direction: column;

`;

export const Header = styled.div`
display: flex;
box-shadow: 0px 3px 0px #353535;
height: 10%;

`;

export const Body = styled.div`
margin: 0.5em;
display: flex;
background: transparent;
height: 80%;
flex-direction: column;
`;

export const DivButton = styled.div`
margin: 0.5em;
display: flex;
height: 10%;
background: transparent;
flex-direction: row;
justify-content: center;
`;