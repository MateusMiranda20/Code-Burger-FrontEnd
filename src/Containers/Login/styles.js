import styled from 'styled-components'

import BackgroundImg from '../../assets/Background.png'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${BackgroundImg}');
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Imagelogin = styled.img`
  height: 85%;
`

export const ContainerIntens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 85%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 24px;
    font-weight: 300;
    line-height: 28px;
    color: #fff;
    text-align: center;
    margin-top: 90px;
  }
`

export const P = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  color: #fff;
  margin-top: 25px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 391.42px;
  height: 38.32px;
  border-radius: 5px;
  border: ${props => (props.error ? ' 1px solid #CC1717' : 'none')};
  background: #ffffff;
  box-shadow: 3px 3px 10px 0px #4a90e230;
  padding-left: 10px;
`

export const Button = styled.button`
  width: 182.81px;
  height: 36.13px;

  background: #9758a6;
  border-radius: 20px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  text-align: center;

  border: none;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 25px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`

export const SingInLink = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  font-weight: normal;
  color: #fff;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
export const ErrorMessage = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  color: #cc1717;
  margin-top: 2px;
`
