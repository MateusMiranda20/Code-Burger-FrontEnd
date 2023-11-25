import React from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import LoginImagem from '../../assets/Login.svg'
import Logo from '../../assets/Logo.svg'
import {
  Container,
  Imagelogin,
  ContainerIntens,
  P,
  Input,
  Button,
  SingInLink,
  ErrorMessage
} from './styles'

function Login() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 digítos.')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => console.log(data)

  return (
    <Container>
      <Imagelogin src={LoginImagem} alt="Login-image" />
      <ContainerIntens>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <img src={Logo} alt="Logo" />
          <h1>Login</h1>

          <P>Email</P>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <P>Senha</P>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit">Sing In</Button>
        </form>
        <SingInLink>
          Não possui conta ? <a>Sing Up</a>
        </SingInLink>
      </ContainerIntens>
    </Container>
  )
}

export default Login
