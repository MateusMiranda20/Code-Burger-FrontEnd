import React from 'react'

import LoginImagem from '../../assets/Login.svg'
import Logo from '../../assets/Logo.svg'
import {
  Container,
  Imagelogin,
  ContainerIntens,
  P,
  Input,
  Button,
  SingInLink
} from './styles'

function Login() {
  return (
    <Container>
      <Imagelogin src={LoginImagem} alt="Login-image" />
      <ContainerIntens>
        <img src={Logo} alt="Logo" />
        <h1>Login</h1>

        <P>Email</P>
        <Input />

        <P>Senha</P>
        <Input />

        <Button>Sing In</Button>
        <SingInLink>
          Não possui conta ? <a>Sing Up</a>
        </SingInLink>
      </ContainerIntens>
    </Container>
  )
}

export default Login
