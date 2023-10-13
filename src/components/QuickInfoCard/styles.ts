import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const ICONBACKGROUND_COLORS = {
  yellowDark: 'yellow-700',
  yellowMid: 'yellow-500',
  purple: 'purple-500',
  gray: 'gray-700',
} as const

interface BackgroundIconProps {
  backgroundIconColor: keyof typeof ICONBACKGROUND_COLORS
}

export const IconBackground = styled.div<BackgroundIconProps>`
  display: flex;
  background-color: ${(props) =>
    props.theme[ICONBACKGROUND_COLORS[props.backgroundIconColor]]};
  padding: 0.5rem;
  border-radius: 50%;
  color: ${(props) => props.theme['base-white']};
`
export const TextInfo = styled.span`
  font-size: 1rem;
  font-style: normal;
`
