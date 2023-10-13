import styled from 'styled-components'

export const InputAddProducts = styled.input`
  display: inline-flex;
  height: 32px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  appearance: textfield;

  input[type='number']::-webkit-inner-spin-button {
    appearance: none;
  }

  input[type='number'] {
    outline: none;
    border-right: 0px;
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    height: 20px;
    padding: 1%;
    border-right: 0 px solid black;
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
  button.a {
    border-right: 0px solid black;
  }
  button.b {
    border-right: 1px solid black;
  }
`
