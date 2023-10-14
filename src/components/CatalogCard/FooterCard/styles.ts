import styled, { CSSObject } from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ValueWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
  font-size: 1.5rem;
`

export const MoneySign = styled.p`
  text-align: right;
  font-style: normal;
  line-height: 0;
`
export const Value = styled.span`
  font-family: 'Baloo 2', sans-serif;
  line-height: 0;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 800;
`
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1.438rem;
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-400']};
`

export const InputAddProducts = styled.input`
  text-align: center;
  font-size: 1.1rem;
  max-width: 2rem;
  height: 1.25rem;
  padding: 0.25rem;
  outline: none;
  border: none;

  background: ${(props) => props.theme['gray-400']};
  color: ${(props) => props.theme['gray-900']};
  appearance: textfield;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  label,
  input,
  button {
    font-size: inherit;
    padding: 0.2em;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
  }
  button {
    height: 20px;
    padding: 1%;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    background-color: white;
    border-left: 0px solid black;
    padding-left: 2%;
    padding-right: 2%;
    outline: none;
    cursor: pointer;
  }
`

const commonStylesButton: CSSObject = {
  width: '1.375rem',
  height: '100%',
  background: '#E6E5E5',
  border: 'none',
  outline: 'none',
  color: '#8047F8',
  cursor: 'pointer',
  transition: 'all 0.5s ease-in-out',
  ':hover': { color: '#4B2995', transform: 'scale(1.2)' },
}

export const DecreaseButton = styled.button`
  ${commonStylesButton}
`

export const IncreseButton = styled.button`
  ${commonStylesButton};
`
export const ButtonAddToCart = styled.button`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-left: 0.5rem;
  color: ${(props) => props.theme['base-white']};
  background: ${(props) => props.theme['purple-700']};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['purple-500']};
    svg {
      transform: scale(1.25);
    }
  }
`
