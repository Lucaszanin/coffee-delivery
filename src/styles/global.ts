import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        text-decoration: none;
    }

    :focus{
        outline:0;
        
    }

    body{
        background: ${(props) => props.theme['gray-100']};
        color: ${(props) => props.theme['gray-700']};
        --webkit-font-smoothing: antialiased;
    }

    body,input,textarea,button,h1,h2,span,p{
        font-family: 'Roboto', sans-serif;
        font-weight:400;
        font-size:0.875rem;
        line-height: 130%;
    }
 
    button{
        outline:none;
        border:none;
    }

    img{
        max-width:100%;
    }

    
    /* @media (max-width: 768px) {
        html,
        body,
        input,
        p,
        textarea,
        span,
        button {
          font-size: 87.5% !important;
        }
      } */
`
