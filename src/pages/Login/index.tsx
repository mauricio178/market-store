import React, { useContext, useState } from 'react'
import { Container, DivIcons } from './styled'
import Input from '../../components/Input/index'
import { useHistory } from 'react-router-dom';
import ButtonPrimary from '../../components/ButtonPrimary'
import DefaultBackground from '../../components/DefaultBackgroundLogin';
import Alert from '../../components/Alert';
import { useAlert } from '../../hooks/alertHook';
import mrkLogo from '../../assets/mrkLogo.png'
import PasswordInput from '../../components/PasswordInput';
import { api } from '../../services/api';
import { FiLock, FiMail } from 'react-icons/fi';



export default function Login(props: any) {

  const { turnOnAlert } = useAlert()

  const history = useHistory()

  async function handleSubmit(data: any) {
    
    // # Armazenando LocalStorage #
    data.preventDefault()
    const email = data.target.elements.email.value
    localStorage.setItem('@market/email', email)
    handleGoToProducts()
    
  //   api.post('/')
  //   .then((response) => {
  //     console.log(response.data)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })  
    
  //   let email = document.getElementById("email");  
  //   if (email === null) turnOnAlert('Email Null', 3000)
  }

  const handleGoToProducts = () => {
    history.push('/productList')
  }

  const handleGoToRegister = () => {
    history.push('/register')
  }


  return (
    <DefaultBackground>
      <Alert />
      <Container>
        <img src={mrkLogo} alt="Market" />
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <Input 
            icon={FiMail}
            placeholder="E-mail" 
            type="email" 
            name="email" />
          <PasswordInput
            icon={FiLock} 
            placeholder="Senha"
            type="password"
            name="password"
          />
          <ButtonPrimary label="Entrar" type="submit" />
        </form>
        <DivIcons>
          <button onClick={handleGoToRegister}>Registrar-se</button>
        </DivIcons>
      </Container>
    </DefaultBackground >
  );
}