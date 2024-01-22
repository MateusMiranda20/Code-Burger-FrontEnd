import styled from 'styled-components'

export const Container = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
  }

  .rec.rec-arrow:hover {
    border: 3px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`
export const CategoryImg = styled.img``

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
`
export const Image = styled.img`
  width: 220px;
  border-radius: 10px;
`
export const Button = styled.button`
  margin-bottom: 16px;
  background-color: #9758a6;
  border-radius: 8px;
  margin-top: 15px;

  height: 50px;
  border: none;

  font-size: 18px;
  font-weight: bold;
  line-height: 100%;
  letter-spacing: 0em;
  text-align: center;
  color: #fff;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
