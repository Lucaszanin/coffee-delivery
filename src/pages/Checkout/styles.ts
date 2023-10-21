import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 4.5rem;
`
export const BaseInput = styled.input`
  width: ${(props) => props.width || '100%'};
  border: 1px solid ${(props) => props.theme['gray-400']};
  background: ${(props) => props.theme['gray-300']};
  padding: 0.75rem;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  color: ${(props) => props.theme['gray-700']};
  transition: all 0.3s ease;

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-700']};
  }

  &[placeholder='CEP'] {
    margin-bottom: 1rem;
  }
`

export const ContainerInputs = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1rem;
`
export const Title = styled.h3`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: ${(props) => props.theme['gray-800']};
`
export const HighlightedText = styled.span`
  font-size: 1rem;
  line-height: 1;
  margin-bottom: 2px;
  color: ${(props) => props.theme['gray-800']};
`
export const NormalText = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme['gray-700']};
  margin-bottom: 2rem;
`
export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const WrapperHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  border-radius: 6px;
  margin-top: 1rem;
  background: ${(props) => props.theme['gray-200']};
`
export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2.5rem;
`
