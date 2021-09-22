import styled from 'styled-components/macro';

export const Container = styled.section`
  padding: 0 20px 30px;
  margin: 0 auto;
  @media ${({theme}) => theme.device.tablet1} {
    max-width: 1000px;
  }
  @media ${({theme}) => theme.device.desktop} {
    max-width: 1280px;
  }
  h2 {
    margin: 0 0 15px 0;
  }
  p {
    font-size: 0.8125rem;
    margin: 0;
    padding-bottom: 20px;
    color: #505050;
  }
  ul {
    display: flex;
    button {
      color: ${({ theme }) => theme.text.second};
      opacity: 0.6;
      font-weight: 700;
    }
    > li {
      margin-right: 20px;
    }
    > li.active button {
      border-bottom: 2px solid ${({ theme }) => theme.primary.main};
      opacity: 1;
    }
  }

`