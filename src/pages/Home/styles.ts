import styled from 'styled-components'

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3.5rem;
  margin-top: 5.875rem;
`
export const WrapperContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 36.75rem;
`

export const ContentRight = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`
export const HeroTitle = styled.h1`
  color: ${(props) => props.theme['gray-900']};
  font-family: 'Baloo 2', sans-serif;
  font-size: 3rem;
  font-style: normal;
  font-weight: 800;
  max-width: 36.75rem;
`
export const HeroSubtTitle = styled.h2`
  color: ${(props) => props.theme['gray-800']};
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  max-width: 36.75rem;
`
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 4.125rem;
  gap: 1.25rem;
`
