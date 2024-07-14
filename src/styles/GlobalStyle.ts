import { createGlobalStyle } from 'styled-components';
import { COLORS } from './colors';

const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;

}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
  background-color: ${COLORS.primary};
  /* height: 2000px; */
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 17px;
}
body {
  font-weight: 300;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.2;
}
a {
  text-decoration:none;
  color:inherit;
}

button{
  border:none;
  background-color: transparent;
  cursor:pointer;
}
 

  input {
    &:focus, &:active {
      outline: none;
      box-shadow: none;
      background-color: white;  
    }

    &:-webkit-autofill {
      background-color: white !important;
      -webkit-box-shadow: 0 0 0px 1000px white inset !important;
      -webkit-text-fill-color: black !important;
    }

    &:-moz-autofill {
      background-color: white !important;
      box-shadow: 0 0 0px 1000px white inset !important;
      -moz-text-fill-color: black !important;
    }

    &:-o-autofill {
      background-color: white !important;
      box-shadow: 0 0 0px 1000px white inset !important;
      -o-text-fill-color: black !important;
    }

    &:-ms-autofill {
      background-color: white !important;
      box-shadow: 0 0 0px 1000px white inset !important;
      -ms-text-fill-color: black !important;
    }
  }
`;

export default GlobalStyle;
