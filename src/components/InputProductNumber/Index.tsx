import { Minus, Plus } from 'phosphor-react'
import * as S from './styles'
import * as T from './types'

export const InputNumberProduct = ({
  onDrecrement,
  onIncrement,
  onChange,
  value,
}: T.InputNumberProductProps) => {
  return (
    <S.InputWrapper>
      <S.DecreaseButton onClick={onDrecrement} className="a">
        <Minus size={16} weight="bold" />
      </S.DecreaseButton>
      <S.InputAddProducts
        min="1"
        type="number"
        value={value}
        onChange={onChange}
      />
      <S.IncreseButton onClick={onIncrement} className="b">
        <Plus size={16} weight="bold" />
      </S.IncreseButton>
    </S.InputWrapper>
  )
}
