import React from 'react'
import { Container, DivIcons } from './styled'
import Input from '../../components/Input/index'
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup'
import ButtonPrimary from '../../components/ButtonPrimary'
import DefaultBackground from '../../components/DefaultBackgroundLogin';
import Alert from '../../components/Alert';
import { useAlert } from '../../hooks/alertHook';
import mrkLogo from '../../assets/mrkLogo.png'
import { api } from '../../services/api';
import PasswordInput from '../../components/PasswordInput';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';

export default function Register(data: any) {

  const history = useHistory()

  async function handleSubmit(data: any) {

    data.preventDefault()
    const email = data.target.elements.email.value
    const name = data.target.elements.name.value
    localStorage.setItem('@market/email', email)
    localStorage.setItem('@market/name', name)
    handleGoToProductList()

  //   try {
  //     api.post("/login", data)
  //   } catch (err) {
  //     console.log(err.message)
  //   }
  }

  const handleGoToLogin = () => {
    history.push('/')
  }

  const handleGoToProductList = () => {
    history.push('/productList')
  }

  return (
    <DefaultBackground>

      <Alert />

      <Container>
        <img src={mrkLogo} alt="Market" />
        <h1>Registro</h1>
        <form onSubmit={handleSubmit}>
          <Input
            icon={FiMail}
            placeholder="E-mail" 
            type="email" 
            name="email" />
          <Input 
            icon={FiUser}
            placeholder="Nome" 
            type="text" 
            name="name" />
          <PasswordInput
            icon={FiLock}
            placeholder="Crie sua Senha"
            type="password"
            name="password"
            />
          <PasswordInput
            icon={FiLock}
            placeholder="Confirme a Senha"
            type="password"
            name="password"
          />
          <ButtonPrimary label="Registrar" type="submit" />
        </form>
        <DivIcons>
          <button onClick={handleGoToLogin}>Voltar ao Login</button>
        </DivIcons>
      </Container>
    </DefaultBackground >
  );
}
