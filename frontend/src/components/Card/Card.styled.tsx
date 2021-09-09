import styled from 'styled-components/macro';

interface StyledCardProp{
  width?: number;
  ratio?: number;
  ishover?: boolean;
}

export const StyledCard = styled.li<StyledCardProp>`
  position: relative;
  width: ${( {width }) => width ? width : 100}%;
  padding: 0 0 20px 0;
  font-size: 0.8125rem;
  .img-container {
    display: inline-block;
    position: relative;
    width: 100%;
    > img {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: ${( { ratio, ishover }) => 
        ratio 
        ? 'cover'
        : ishover ? 'cover' : 'contain'};
      background-color: ${( { theme, ratio }) => ratio ? '' : theme.colors.gray.second};
    }
  }
  .img-container::before {
    display: block;
    content:'';
    margin-top: ${( { ratio }) => ratio ? ratio : 74.5}%;
    width: 100%;
  }
  > a {
    width: 100%;
    display: inline-block;
    color: ${({ theme }) => theme.text.main};
  }
  .title,
  .description {
    margin-top: 6px;
    margin-bottom: 0;
  }
  .title {
    display: block;
  }
`