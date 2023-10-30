import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

/* Обнуление */
* {
  padding: 0;
  margin: 0;
  border: 0;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit_box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,:active {outline: none;}
nav, footer, header, aside {display: block;}
html,
body {
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input, button, textarea {
  font-family: 'Poppins', sans-serif;
  background: none;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
}
input::placeholder,
textarea::placeholder {
  opacity: 0.7;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
}

input:-ms-clear {display: none;}
button {cursor: pointer;}
a, a:visited {text-decoration: none;}
a:hover {text-decoration: none;}
ul li {list-style: none;}
img {vertical-align: top}
h1, h2, h3, h4, h5, h6 {
   font-size: inherit;
   font-weight: 400;
}

*::-webkit-scrollbar {
  height: 6px;
  width: 6px;
}

*::-webkit-scrollbar-track {
  padding: 4px 0;
  border-radius: 12px;
  background-color: none;
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: ${({ theme }) => theme.text};
}

body {
  line-height: 1;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.bg_body};
  font-family: 'Poppins', sans-serif;
}
`
