import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2.5rem;
  justify-content: space-between;
  margin-top: 4.5rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`
export const WrapperContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Title = styled.h1`
  font-size: 2rem;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  color: ${(props) => props.theme['yellow-700']};
`

export const SubTitle = styled.h2`
  font-size: 1.25rem;
`
export const WrapperInformation = styled.div`
  display: flex;
  width: 526px;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  border-radius: 6px 36px;
  border: 1px solid ${(props) => props.theme['yellow-500']};
  margin-top: 2.5rem;

  @media (max-width: 1200px) {
    align-items: center;
    width: 100%;
  }
`
export const ContainerDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
`

type DetailsProps = { bold: boolean }

export const DetailText = styled.p<DetailsProps>`
  font-style: normal;
  width: 100%;
  font-weight: ${({ bold }) => (bold ? ' 700' : '400')};
  white-space: nowrap;
`
export const WrapperDetailText = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`
export const ContainerDetailText = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`

const ROUNDED_COLORS = {
  yellowDark: 'yellow-700',
  purple: 'purple-500',
  yellowMid: 'yellow-500',
} as const

interface RoundedProps {
  backgroundColors: keyof typeof ROUNDED_COLORS
}

export const RoundedBackgroundIcon = styled.div<RoundedProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: ${(props) =>
    props.theme[ROUNDED_COLORS[props.backgroundColors]]};
  color: ${(props) => props.theme['base-white']};
`
export const WrapperContentRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
