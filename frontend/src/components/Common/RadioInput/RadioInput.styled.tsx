import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  margin-bottom: 0.625rem;
  color: ${({theme}) => theme.text.second};
  .price {
    font-size: 0.6875rem;
    flex-grow: 1;
    text-align: right;
  }
  .price--each {
    font-size: 0.6875rem;
    color: ${({theme}) => theme.text.third};
  }
`