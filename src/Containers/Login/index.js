import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import LoginImagem from '../../assets/Login.svg'
import Logo from '../../assets/Logo.svg'
import { Button } from '../../components'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  Container,
  Imagelogin,
  ContainerIntens,
  P,
  Input,
  SingInLink,
  ErrorMessage
} from './styles'

export function Login() {
  const navigate = useNavigate()
  const { putUserData, userData } = useUser()
  console.log(userData)

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

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('secao', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja bem-vindos(a)',
        error: 'Verifique seu e-mail e senha'
      }
    )

    putUserData(data)
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }

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

          <Button type="submit" style={{ marginTop: 20, marginBottom: 25 }}>
            Sing In
          </Button>
        </form>
        <SingInLink>
          Não possui conta ?{' '}
          <Link style={{ color: ' white' }} to="/cadastro">
            Sing Up
          </Link>
        </SingInLink>
      </ContainerIntens>
    </Container>
  )
}
