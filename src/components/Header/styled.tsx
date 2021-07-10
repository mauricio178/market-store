import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  height: 4em;
  padding: 2px 48px;
  justify-content: space-between;
  align-items: center;
  text-align: flex-start;
  background: var(--secondary-color);
  color: var(--text-color);

  div {
    display: flex;
    align-items: center;
    img {
      width: 100px;
      height: 50px;
    }
  }
  button {
    margin: 1em;
    border: none;
    padding: 5px;
    color: #000000;
    background-color: transparent;
      :hover {
      opacity: 0.8;
      transition: .3s;
      cursor: pointer;
      }
  }
`;