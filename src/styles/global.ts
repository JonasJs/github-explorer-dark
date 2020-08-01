import { createGlobalStyle } from 'styled-components';

import githubBakcground from '../assets/animation_640_kdbduod4.gif';

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

  body, input, button {
    font: 16px Roboto, sans-serif;
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
    --light-gray: #A8A8B3;
    --gray: #A8A8B3;
  }
`;
