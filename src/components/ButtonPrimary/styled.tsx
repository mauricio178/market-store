import styled from "styled-components";


export const Container = styled.button`
  width: 100%;
  height: 2em;
  font-size: 20px;
  font-family: 'Calibri';
  border-radius: 4px;
  border: none;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  background: var(--background-ligth);
  color: #ffffff;    
  box-shadow: 4px 4px 2px #353535;
  transition: position  0.2s;
  &:active {
    position: relative;
    top: 2px;
    box-shadow: 1px 1px 2px #353535;
  }    
  &:hover{
    filter: brightness(.8);
    transition: .4s;
    cursor: pointer;
  }
`