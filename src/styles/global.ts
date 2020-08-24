import { createGlobalStyle } from 'styled-components';

import githubBakcground from '../assets/Github.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--primary) url(${githubBakcground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, p, h1, h2, h3 {
    font: 16px Roboto, sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }


  :root {
    --primary: #24292E;
    --secondary: #6E6A81;
    --white: #FFF;
    --light-gray: #737380;
    --gray: #A8A8B3;
  }
`;
