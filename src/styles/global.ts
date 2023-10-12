import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    :focus{
        outline:0;
        box-shadow:0 0 0 2px ${(props) => props.theme['purple-500']};
    }

    body{
        background: ${(props) => props.theme['base-white']};
        color: ${(props) => props.theme['gray-700']};
        --webkit-font-smoothing: antialiased;
    }

    body,input,textarea,button,h1,span{
        font-family: 'Roboto', sans-serif;
        font-weight:400;
        font-size:0.875rem;
    }


    
    @media (max-width: 768px) {
        html,
        body,
        input,
        p,
        textarea,
        span,
        button {
          font-size: 87.5% !important;
        }
      }
`
