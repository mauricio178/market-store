import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  border: 1px solid gray;
  background: var(--primary-color);
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 4px;
`;
export const DivProductInfo = styled.div`

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding-left: 2em;
padding-right: 4em;
width: 95%;

label {
  font-family: 'Calibri';
  font-size: 18px;
}
`;
export const DivButton = styled.div`
flex: 20%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding-left: 2em;
padding-right: 2em;
width: 5%;

button {
  padding: 4px;
  border-radius: 8px;
  border: transparent;
  color: var(--title-color);
  background: transparent;
  :hover {
    transition: 0.5s;
    background: #5a5a5a;
    color: #ffffff;
    cursor: pointer;
  }

}
`;