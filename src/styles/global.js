import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
      font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
      line-height: 1.5;
      font-weight: 400;

      color-scheme: light dark;
      color: rgba(255, 255, 255, 0.87);
      background-color: #242424;

      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;
    }

    a {
      text-decoration: none;
      cursor: pointer;
    }
    
    a:hover {
      color: #535bf2;
    }

    body {
      margin: 0;
      display: flex;
      place-items: center;
      min-width: 320px;
      min-height: 100vh;
    }

    h1 {
      font-size: 3.2em;
      line-height: 1.1;
      color: red;
    }

   

   
`


