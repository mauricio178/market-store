import React from 'react'
import { Container} from './styled'

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


