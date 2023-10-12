import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;
  height: calc(100vh - 10rem);
  padding: 2.5rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 90vw;
    padding: 1.5rem;
  }
`
