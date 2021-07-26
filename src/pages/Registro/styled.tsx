import styled from 'styled-components'


export const DivIcons = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 70%;
margin-top: 1em;
  
button{
    padding: 4px;
    border: 0px solid;
    font-size: 16px;
    font-weight: 600;
    background: transparent;
    color: var(--background-ligth);
    box-shadow: 0 2px 0 var(--background-ligth);
    &:hover{
      cursor: pointer;
      opacity: 0.8;
      border-radius: 8px;
      transition: 0.3s;
    }
  }

`;

export const Container = styled.div`

  display: flex;
  background:transparent;
  justify-content: centert;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 1em;
  border: 1px solid transparent;

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
    color: var(--text-color-ligth);
    box-shadow: 0 2px 0px;

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