import React, { useState } from 'react'
import { Container, DivIcons } from './styled'
import Input from '../../components/Input/index'
import { useHistory } from 'react-router-dom';
import ButtonPrimary from '../../components/ButtonPrimary'
import DefaultBackground from '../../components/DefaultBackgroundLogin';
import Alert from '../../components/Alert';
import { useAlert } from '../../hooks/alertHook';
import mrkLogo from '../../assets/mrkLogo.png'
import { FiFacebook, FiGithub, FiInstagram } from 'react-icons/fi'

export default function Login() {

  const { turnOnAlert } = useAlert()

  const history = useHistory()

  async function handleSubmit(data: any) {
    data.preventDefault()

    try {
      let email = document.getElementById("email");

      if (email === null) turnOnAlert('Email Null', 3000)

    } catch (err) {
      handleGoToProducts()
    }

  }
  const handleGoToProducts = () => {
    history.push('/productList')
  }

  return (
    <DefaultBackground>

      <Alert />

      <Container>
        <img src={mrkLogo} alt="Market" />
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <Input placeholder="E-mail" type="email" name="email" />
          <Input placeholder="Senha" type="password" name="password" />
          <ButtonPrimary label="Entrar" type="submit" />
        </form>
        <label>ou entre com...</label>
        <DivIcons>
          <button>
            <FiFacebook size="24" />
          </button>
          <button>
            <FiGithub size="24" />
          </button>
          <button>
            <FiInstagram size="24" />
          </button>
        </DivIcons>
      </Container>
    </DefaultBackground>
  );
}