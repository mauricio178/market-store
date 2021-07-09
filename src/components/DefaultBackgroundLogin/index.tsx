import React, { useRef, } from 'react'
import ButtonPrimary from '../ButtonPrimary';
import { Container, ContainerForm } from './styled'

interface AuthDefaultBackgroundInterface{
  children: React.ReactNode;
}

export default function DefaultBackground({ children }: AuthDefaultBackgroundInterface){
  return (
    <Container className="App"> 
          {children}

    </Container>
  );
}


