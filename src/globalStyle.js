import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `
    body {
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};

        transition: .3s;
    }

    button {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};

        border: 1px solid #ffff;
        border-radius: 8px;
        padding: 3px 10px;
        margin-left: 10px;
        font-size: 1.5rem;
    }
`