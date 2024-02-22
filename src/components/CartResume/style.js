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
    grid-template-areas:
      'title title'
      'items items-price'
      'delivery-tex delivery-price-tex';
  }

  .title {
    grid-area: title;
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
`
