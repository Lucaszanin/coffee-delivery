import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 1.7rem;
  left: 2rem;
  background: ${(props) => props.theme['yellow-700']};
  color: ${(props) => props.theme['base-white']};
  border-radius: 50%;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.72px;
  width: 1.25rem;
  height: 1.25rem;
`

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 0.5rem;
  background: ${(props) => props.theme['yellow-300']};
  color: ${(props) => props.theme['yellow-700']};
  cursor: pointer;
`
