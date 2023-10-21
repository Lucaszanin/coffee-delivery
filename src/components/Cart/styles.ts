import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1;
  width: 100%;
  max-width: 360px;
  padding: 0.5rem 0.25rem;
  background: ${(props) => props.theme['gray-200']};
`
export const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 64px;
  height: 64px;
`

export const Divider = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  margin-top: 2rem;
  height: 1px;
  background: ${(props) => props.theme['gray-400']};
`

export const ProductName = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme['gray-800']};
`

export const ProductValue = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme['gray-700']};
`

export const ContentMidWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  line-height: 160%;
  gap: 0.5rem;
  text-transform: uppercase;
  color: ${(props) => props.theme['gray-700']};
  border-radius: 6px;
  background: ${(props) => props.theme['gray-400']};
  padding: 0.5rem;
`
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
