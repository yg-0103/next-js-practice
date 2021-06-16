import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html,body {
    padding: 0;
    margin: 0;
    font-size: 16px;
  }

  ul,ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  button {
    padding: 0;
    margin: 0;
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;
