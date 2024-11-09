
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Rubik", sans-serif;
    background: rgb(249, 245, 253);
    background: linear-gradient(
      180deg,
      rgba(249, 245, 253, 1) 0%,
      rgba(254, 254, 255, 1) 100%
    );
    background-position: center;
    background-repeat: no-repeat;
  }
`;
 
export default GlobalStyle;