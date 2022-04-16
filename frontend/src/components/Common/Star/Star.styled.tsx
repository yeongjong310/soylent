import styled from 'styled-components/macro';
import StarProps from './Star.type';

export const StyledStar = styled.img<Pick<StarProps, 'size'>>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;
