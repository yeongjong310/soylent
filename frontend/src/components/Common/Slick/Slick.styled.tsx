import styled from 'styled-components/macro';


export const Container = styled.div<{currentSlide: number}>`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .carousel {
    display: flex;
    transform: ${({currentSlide}) => `translate3D(${currentSlide * -100}% , 0, 0)`};
    transition: transform 0.3s ease;
    > li {
      flex-shrink: 0;
      @media ${({theme}) => theme.device.tablet1} {
        width: 50%;
        padding: 0 10px;
      }
      @media ${({theme}) => theme.device.tablet2} {
        width: 33.33%;
      }
    }
  }
  .current-slide {
    display:flex;
    align-items: center;
    justify-content: center;
    order: 1;
    line-height: 2rem;
    font-size: 1.5rem;
    font-weight: 700;
    vertical-align: middle;
    > output {
      padding: 0 1rem 0.6rem;
      padding-bottom: 0.6rem;
    }
  }
`;