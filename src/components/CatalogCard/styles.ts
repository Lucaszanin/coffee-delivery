import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 256px;
  align-items: center;
  flex: 1;
  padding-bottom: 1.25rem;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background: ${(props) => props.theme['gray-200']};
`

export const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  margin-top: -10%;
`

export const BadgeTypeContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.75rem;
`

export const BadgeTypeText = styled.p`
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  color: ${(props) => props.theme['yellow-700']};
  background: ${(props) => props.theme['yellow-300']};
  border-radius: 100px;
`
export const ProductName = styled.span`
  text-align: center;
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  color: ${(props) => props.theme['gray-800']};
`
export const DetailsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2.063rem;
  margin-top: 1rem;
  padding-inline: 1.25rem;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;
`
export const ProductDescription = styled.p`
  text-align: center;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-style: normal;
  color: ${(props) => props.theme['gray-600']};
`
