import * as T from './types'
import * as S from './styles'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { ChangeEvent, useCallback, useContext, useMemo, useState } from 'react'
import { ProductContext } from '../../../contexts/ProductContex'

export const FooterCard = ({ productValue }: T.FooterCardProps) => {
  const { setTotal } = useContext(ProductContext)

  const [quantityProduct, setQuantityProduct] = useState(1)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantityProduct((quantity) => quantity + Number(e.target.value))
  }

  const handleIncrement = () => {
    setQuantityProduct((quantityProduct) => quantityProduct + 1)
  }

  const handleDecrement = () => {
    setQuantityProduct((quantityProduct) => quantityProduct - 1)
  }

  const verificarValorAnterior = useCallback(() => {
    setTotal((total) => total + quantityProduct - total)
  }, [quantityProduct, setTotal])

  const handleClick = () => {
    verificarValorAnterior()
  }

  const value = useMemo(() => {
    return (productValue * quantityProduct).toFixed(2)
  }, [quantityProduct, productValue])

  return (
    <S.FooterContainer>
      <S.ValueWrapper>
        <S.MoneySign>R$</S.MoneySign>
        <S.Value>{value}</S.Value>
      </S.ValueWrapper>
      <S.InputWrapper>
        <S.DecreaseButton onClick={handleDecrement} className="a">
          <Minus size={16} weight="bold" />
        </S.DecreaseButton>{' '}
        <S.InputAddProducts
          min="1"
          type="number"
          value={quantityProduct}
          onChange={handleInputChange}
        />
        <S.IncreseButton onClick={handleIncrement} className="b">
          <Plus size={16} weight="bold" />
        </S.IncreseButton>
      </S.InputWrapper>
      <S.ButtonAddToCart onClick={handleClick}>
        <ShoppingCart size={22} weight="fill" />
      </S.ButtonAddToCart>
    </S.FooterContainer>
  )
}
