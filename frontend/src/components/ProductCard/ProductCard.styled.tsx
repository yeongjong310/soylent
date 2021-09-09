import styled from 'styled-components/macro';

export const StyledProductCardForm = styled.form`
  display:flex;
  flex-direction: column;
  padding-top: 1.0666rem;
  border-top: ${({ theme }) => theme.colors.gray.main} 1px solid;
  .img-container::before {
    margin-top: 74.5%;
  }
  
  .purchase-option {
    width: 100%;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: .09em;
    border: 1px solid #000;
    text-transform: uppercase;
    padding: 8px 10px;
    border-radius: 0;
    appearance: none;
    box-shadow: none;
    background-color: #fff;
    outline: none;
  } 
`;