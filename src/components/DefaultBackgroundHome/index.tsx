import React, {useState} from 'react'
import AsideBar from '../AsideBar';
import Header from '../Header';
import { Container } from './styled'


interface DefaultBackgroundHomeInterface {
  children: React.ReactNode;
}

export default function DefaultBackgroundHome({ children }: DefaultBackgroundHomeInterface) {

  return (
    <Container>
      <Header />
      <AsideBar/>
      {children}
    </Container>
  );
}


