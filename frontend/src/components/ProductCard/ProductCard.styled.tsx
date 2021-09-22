import styled from 'styled-components/macro';

export const StyledProductCardForm = styled.form`
  display:flex;
  flex-direction: column;
  padding-top: 1.0666rem;
  border-top: ${({ theme }) => theme.colors.gray.main} 1px solid;

  .img-container::before {
    margin-top: 74.5%;
  }
  .shipping-wrapper {
    > label {
      display: block;
      margin-top: 0.625rem;
      margin-bottom: 0.3125rem;
      font-size: 0.6875rem;
    }
  }
  .selector-wrapper {
    position: relative;
    > svg {
      width: 9px;
      height: 6px;
      position: absolute;
      top: 50%;
      right: 8px;
      transform: translateY(-50%);
    }
  }
`;

export const SubscribeComment = styled.div`
  text-align: center;
  color: ${({theme}) => theme.text.third};
`

export const SubTitle = styled.div`
  display:flex;
  justify-content: space-between;
  color: ${({theme}) => theme.text.third};
  margin-bottom: 0.8125rem;
  .review {
    padding-left: 0.3125rem;
    font-size: 0.6875rem;
  }
`

export const ShippingFriquencies = styled.div`
  height: 3.125rem;
  background-color: ${({theme}) => theme.colors.black};
  color: ${({theme}) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.3125rem;
  font-weight: 700;
  > .add-to-card {
    font-weight: inherit;
    color: inherit;
    padding: 1px 6px;
    flex-grow: 3;
    height: 100%;
    position: relative;
    ::before {
      content: "";
      position: absolute;
      border-left: 1px solid hsla(0,0%,91%,.3);
      height: 31px;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  :hover {
    background-color: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.black};
    border: 1px ${({theme}) => theme.colors.black} solid;
    > .add-to-card::before {
      border-left: 1px solid hsla(0,0%,91%, 1);
    }
  }
`