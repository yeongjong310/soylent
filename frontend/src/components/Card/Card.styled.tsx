import styled from 'styled-components/macro';

export const StyledCard = styled.li`
  position: relative;
  width: 50%;
  padding: 0 0 20px 0;
  .img-container {
    display: inline-block;
    position: relative;
    width: 100%;
    > img {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .img-container::before {
    display: block;
    content:'';
    margin-top: 100%;
    width: 100%;
  }
  > a {
    width: 100%;
    display: inline-block;
    text-decoration: none;
    color: ${({ theme }) => theme.text.main};
    > strong,
    > p {
      margin-top: 6px;
      margin-bottom: 0;
    }
    > strong {
      display: block;
    }
  }
`