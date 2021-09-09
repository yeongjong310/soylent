import styled from 'styled-components/macro';

export const StyledBanner = styled.section`
  picture {
    display: block;
    height: 255px;
    img {
      height: inherit;
      width: 100%;
      object-fit: cover;
      box-sizing: content-box;
    }
  }
`
export const BannerContent = styled.div`
  background-color: #ade8bf;
  padding: 38px 22px;
  border: 4px solid black;
  > h2 {
    line-height: 1.859375rem;
    margin: 0 0 10px 0;
  }
  > p {
    line-height: 1.24;
    font-size: 1.125rem;
    margin: 0 0 20px 0;
  }
`