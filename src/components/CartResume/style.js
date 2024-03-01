import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container-top {
    display: grid;
    grid-gap: 10px 50px;
    grid-template-areas:
      'title title'
      'items items-price'
      'delivery-tex delivery-price-tex';

    .title {
      grid-area: title;
      margin-bottom: 20px;
    }
    .items {
      grid-area: items;
    }
    .items-price {
      grid-area: items-price;
    }
    .delivery-tex {
      grid-area: delivery-tex;
    }
    .delivery-price-tex {
      grid-area: delivery-price-tex;
    }
  }

  .container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    margin-top: 50px;
  }
`
