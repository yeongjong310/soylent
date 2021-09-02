import React, { ReactElement } from 'react'
import { StyledTopBanner } from './TopBanner.styled';

interface Props {
  
}

export default function TopBanner({}: Props): ReactElement {
  return (
    <StyledTopBanner>
      <p>Free shipping to the continental U.S. on orders $25 and over!</p>
    </StyledTopBanner>
  )
}
