import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  box-sizing: border-box;
  flex: 1;
  width: 180px;
  height: 51px;
  white-space: nowrap;
  cursor: pointer;

  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  padding-left: 1rem;
  text-transform: uppercase;
  border-radius: 6px;
  line-height: 160%;
  background: ${(props) => props.theme['gray-400']};
  transition: all.3s ease-in-out;
  position: relative;

  &:hover {
    background: ${(props) => props.theme['gray-500']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme['purple-500']};
  }

  &::before {
    content: '';
    background: ${(props) => props.theme['purple-300']};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease-in;
  }

  &:focus::before {
    opacity: 0.4;
  }
`
