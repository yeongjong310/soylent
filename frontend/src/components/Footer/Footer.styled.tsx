import styled from 'styled-components/macro';

export const Container = styled.footer`
  background-color: ${({theme}) => theme.text.second};
  padding: 30px 0 20px 0;
  .footer-container {
    margin: 0 auto;
    padding: 0 20px 0;  
    @media ${({theme}) => theme.device.tablet1} {
      max-width: 1000px;
      .footer__menu-bottom-nav-inner {
        display: flex;
        flex-direction: row;
        > li {
          margin-right: 20px;
        }
      }
      .footer__top {
        h2 {
          font-size: 1.3125rem;
        }
        li { 
          width: 699px;
          font-size: 1.125rem;
        }
      }
    }
    @media ${({theme}) => theme.device.desktop} {
      max-width: 1280px;
    }
  }
  h2 { 
    font-size: 0.8125rem;
  }
  * {
    color: ${({theme}) => theme.colors.white};
  }
  .footer__top {
    display: flex;
    &-menu {
      width: 150px;
      margin-right: 20px;
    }
    li {
      margin-bottom: 10px;
    }
  }

  .footer__bottom {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid hsla(0,0%,91%,.2)
  }

  .footer__copyright {
    display: flex;
    order: -1;
    justify-content: space-between;
    > p {
      order: 1;
    }
  }
` 