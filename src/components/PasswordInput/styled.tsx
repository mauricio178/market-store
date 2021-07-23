import styled from 'styled-components'

export const Container = styled.div`
  font-weight: 400;
  padding: 1rem 1;
  border: 0px solid ;
  border-radius: 0.25rem;
  width: 100%;
  height: 2rem;
  padding: 1rem;
  margin-bottom: 1em;
  background: #c7cec6;
  border: 1px solid transparent;
  box-shadow: 4px 4px 2px #353535;
  font-family: sans-serif;
  font-size: 20px;
  color: var(--text-color);
  &:focus {
  box-shadow: 2px 2px 1px #545454;
  border: 1px solid transparent;
  outline: 0;
  transition: .8s;
}  

  button {
    transition: 0.4s;
    color: var(--title-color)
  }
  
  input {
    border: 0px solid ;
    border-radius: 0.25rem;
    width: 100%;
    height: 2rem;
    padding: 1rem;
    background: #c7cec6;
    border: 1px solid transparent;
    font-family: sans-serif;
    font-size: 20px;
    color: var(--text-color);
    &:focus {
    outline: 0;
    transition: .8s;
  }  
    
  }
`;