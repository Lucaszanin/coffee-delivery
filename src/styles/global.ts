import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    :focus{
        outline:0;
        box-shadow:0 0 0 2px ${(props) => props.theme['purple-300']};
    }

    body{
        background: ${(props) => props.theme['gray-100']};
        color: ${(props) => props.theme['gray-700']};
        --webkit-font-smoothing: antialiased;
    }

    body,input,textarea,button,h1,h2,span{
        font-family: 'Roboto', sans-serif;
        font-weight:400;
        font-size:0.875rem;
        line-height: 130%;
    }
 
    button{
        outline:none;
        border:none;
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
