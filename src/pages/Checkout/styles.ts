import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2.5rem;
  justify-content: space-between;
  margin-top: 4.5rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
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

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1200px) {
    width: 100%;
  }
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
type ContainerCardProps = { isDetails: boolean }

export const ContainerCard = styled.div<ContainerCardProps>`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-top-left-radius: 6px;
  border-top-right-radius: ${({ isDetails }) => (isDetails ? '40px' : '6px')};
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: ${({ isDetails }) => (isDetails ? '40px' : '6px')};
  margin-top: 1rem;
  background: ${(props) => props.theme['gray-200']};

  @media (max-width: 1200px) {
    width: 83vw;
    display: block;
  }
`
export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const LineContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &:not(:first-child) {
    padding-top: 0.75rem;
  }
`

type DetailsProps = { bold?: boolean }

export const DetailText = styled.p<DetailsProps>`
  font-style: normal;
  font-size: ${({ bold }) => (bold ? '1.25rem' : '.75rem')};
  font-weight: ${({ bold }) => (bold ? ' 700' : '400')};
`
export const DetailValue = styled.p<DetailsProps>`
  font-size: ${({ bold }) => (bold ? '1.25rem' : '.75rem')};
  font-weight: ${({ bold }) => (bold ? '700' : '400')};
`
export const SendOrderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  padding: 0.75rem 0.5rem;
  width: 100%;
  background: ${(props) => props.theme['yellow-500']};
  line-height: 160%;
  text-transform: uppercase;
  color: ${(props) => props.theme['base-white']};
  font-weight: 700;
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 6px;
  margin-top: 1.5rem;

  &:hover {
    background: ${(props) => props.theme['yellow-700']};
    transform: scale(1.02);
  }
`
