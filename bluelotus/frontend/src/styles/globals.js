import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle` 
:root {
    --purple: #603AB1;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    outline: none;
    border: none;
    text-decoration: none;
    text-transform: capitalize;
    transition: .2s linear;
}

html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    scroll-padding-top: 6rem;
    overflow-x: hidden;
}

header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
    padding: 1rem 12%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.25);
}

h1{
    text-align: center;
    text-transform: uppercase;
    color:#321e5e;
    font-size: 2.2rem;
    font-family: 'Roboto';
    padding: 1rem;
    margin-bottom: 1rem;
  }

.mensagem{
    text-transform: none;
    font-size: 1.6rem;
    margin:auto;
    text-align: center;
    color: #237ac2;
  }

 
`;
export default GlobalStyle;