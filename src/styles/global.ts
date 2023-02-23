import { createGlobalStyle  } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #262626;
        -webkit-font-smoothing: antialiased;
        font-family: "Roboto", sans-serif;
    }
`;