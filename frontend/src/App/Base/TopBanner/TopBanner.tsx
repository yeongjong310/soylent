import { ReactElement } from 'react'
import { StyledTopBanner } from './TopBanner.styled';

export default function TopBanner(): ReactElement {
  return (
    <StyledTopBanner>
      <p>Free shipping to the continental U.S. on orders $25 and over!</p>
    </StyledTopBanner>
  )
}
