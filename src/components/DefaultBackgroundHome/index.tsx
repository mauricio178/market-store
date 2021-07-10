import React, {useState} from 'react'
import AsideBar from '../AsideBar';
import Header from '../Header';
import UserMenu from '../UserMenu';
import { Container } from './styled'


interface DefaultBackgroundHomeInterface {
  children: React.ReactNode;
}

export default function DefaultBackgroundHome({ children }: DefaultBackgroundHomeInterface) {

  return (
    <Container>
      <Header />
      <AsideBar/>
      <UserMenu/>
      {children}
    </Container>
  );
}


