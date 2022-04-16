import React, { ReactElement } from 'react'

// styles
import 'styled-components/macro';
import { StyledSelect } from './Selector.styled';

interface Props {
  id: string;
  options: { value: string | number, text: string}[];
  cssStr?: string;
}

export default function Selector({id, options, cssStr}: Props): ReactElement {
  return (
    <StyledSelect 
      css={cssStr}
      id={id} 
    >
      {
        options.map(({ value, text }, index) => <option key={index} value={value}>{text}</option>)
      }
    </StyledSelect>
  )
}