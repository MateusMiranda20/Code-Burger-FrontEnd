import styled from 'styled-components'

export const Container = styled.div`
  height: 72px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`
export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`
export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => (props.isActive ? '#9758a6' : '#555')};
  font-size: 16px;
  line-height: 19px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
`
export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
export const ContainerText = styled.div`
  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 16px;

    color: #555;
  }
`

export const Line = styled.div`
  height: 40px;
  border: 0.5px solid #000;
`
export const PageLinkExit = styled.a`
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  line-height: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;

  color: #9758a6;
`
