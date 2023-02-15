import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
        background-color: blue;
        margin: 0;
    }
`

function GlobalStyle() {
  return <StyledGlobalStyle/>
}

export default GlobalStyle