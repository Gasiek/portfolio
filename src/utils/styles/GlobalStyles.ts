import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Electrolize, Arial, sans-serif;
    }

    #root {
        min-height: 100vh;
    }

    body {
        font-family: Electrolize, Arial, sans-serif;
        background-color: ${({ theme }) => theme.colors.dark.primary};
        color: ${({ theme }) => theme.colors.white};
        line-height: 1.6;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.light.primary};
        &:hover {
            color: ${({ theme }) => theme.colors.light.secondary};
        }
    }
 `;

export default GlobalStyle;