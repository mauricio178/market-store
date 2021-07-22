import styled from 'styled-components'


export const DivIcons = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 70%;
margin-top: 1em;
  
  button{
    padding: 8px;
    border: 1px solid var(--title-color);
    border-radius: 8px;
    background: transparent;
    color: var(--title-color);
    box-shadow: 4px 4px 2px #353535;
    &:hover{
      cursor: pointer;
      opacity: 0.8;
      border-radius: 8px;
      transition: 0.3s;
      color: blue;
      border: 1px solid blue;
      box-shadow: 2px 2px 2px #353535;
    }
  }

`;

export const Container = styled.div`

  display: flex;
  background: var(--secondary-color);
  justify-content: centert;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 1em;
  border: 1px solid transparent;
  box-shadow: 4px 4px 2px #353535;

  form {
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      
      button {
        background: transparent;
        font-size: 22px;
        cursor: pointer;
        border: 0px solid transparent;
        margin-left: 8px;

      }
    }

  }
  

  h1 {
    margin-bottom: 1em;
    font-family: 'Calibri';
    color: var(--title-color);

  }

  img {
    width: 70%;
    margin-bottom: 2em;
  }
  
  label {
    font-family: 'Calibri';
    color: var(--text-color);
    font-size: 16px;
  }
`;