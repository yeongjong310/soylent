import { createGlobalStyle } from 'styled-components/macro';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
 :root {
   font-size: 16px;
  }
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    background: ${ theme.colors.white };
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    font-family: 'Apercu', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 
      'Helvetica Neue', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'
      , sans-serif;
    color: ${ theme.text.main };
  }

  // normalize
  ul, 
  li {
    list-style-type: none;
    padding-inline-start: 0; 
  }

  figure {
    margin: 0;
  }

  button {
    border: 0;
    cursor: pointer;
    margin: 0;
    padding: 0;
    background: none
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  input { 
    cursor: pointer;
  }
`