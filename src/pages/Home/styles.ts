import styled from 'styled-components'

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-flow: row;
  width: 100%;
  gap: 2rem;
  margin-top: 4.125rem;
  padding-bottom: 9.813rem;

  @media (max-width: 1024px) {
    justify-items: center;
    gap: 0;
  }

  @media (max-width: 1200px) {
    justify-items: center;
    gap: 0.5rem;
  }
`
export const MainTitle = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
  font-style: normal;
  margin-top: 8.75rem;
  font-weight: 800;
  color: ${(props) => props.theme['gray-800']};
`
