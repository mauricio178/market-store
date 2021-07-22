import React, { useState } from 'react'
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

export default function Register(data: any) {

  const history = useHistory()

  async function handleSubmit(data: any) {

    try {
      api.post("/login", data)
      handleGoToLogin()
    } catch (err) {
      console.log(err.message)
    }
  }

  const handleGoToLogin = () => {
    history.push('/')
  }

  return (
    <DefaultBackground>

      <Alert />

      <Container>
        <img src={mrkLogo} alt="Market" />
        <h1>Registro</h1>
        <form onSubmit={handleSubmit}>
          <Input placeholder="E-mail" type="email" name="email" />
          <Input placeholder="Nome" type="text" name="name" />
          <PasswordInput
            placeholder="Crie sua Senha"
            type="password"
            name="password"
          />
          <PasswordInput
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
