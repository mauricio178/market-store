import styled from "styled-components";


export const Container = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5em;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Calibri';
  border-radius: 4px;
  border: none;
  margin-top: 0.5em;
  font-family: sans-serif;
  margin-bottom: 0.5em;
  padding: 1em;
  background: var(--background-ligth);
  color: var(--text-color-ligth);    
  transition: position  0.2s;
  &:active {
    position: relative;
    top: 2px;
  }    
  &:hover{
    filter: brightness(.8);
    transition: .4s;
    cursor: pointer;
  }
`;