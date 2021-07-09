import React from 'react';
import { Routes } from '../src/routes/routes';
import GlobalStyle from './styles/global'
import Login from '../src/pages/Login'

export default function App() {
  return (
    <>  
      <Routes/>
      <GlobalStyle />
    </>
  );
}

