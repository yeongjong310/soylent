import styled  from 'styled-components/macro';

export const A11yHidden = styled.div`
  overflow: hidden;
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: circle(0);
  width: 1px;
  height: 1px;
  margin: -1px;
  white-space: nowrap;

  &.focusable:focus {
    overflow: initial;
    position: static;
    clip: auto;
    clip-path: unset;
    width: initial;
    height: initial;
    margin: initial;
    white-space: initial;
  }
`;