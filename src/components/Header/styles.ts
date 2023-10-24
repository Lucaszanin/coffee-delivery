import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  position: sticky;
  width: 100%;
  justify-content: space-between;
`

export const LocalizationCard = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
  background: ${(props) => props.theme['purple-300']};
  color: ${(props) => props.theme['purple-700']};
  border-radius: 6px;
`

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
