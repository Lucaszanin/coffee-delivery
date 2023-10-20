import * as T from './types'
import * as S from './styles'
import { ShoppingCart } from 'phosphor-react'
import { ChangeEvent, useCallback, useContext, useMemo, useState } from 'react'
import { ProductContext } from '../../../contexts/ProductContex'
import { InputNumberProduct } from '../../InputProductNumber/Index'
import { productsData } from '../../../productsData/productsData'

export const FooterCard = ({ productValue }: T.FooterCardProps) => {
  const { setTotal, total, addProductInCart } = useContext(ProductContext)

  const [quantityProduct, setQuantityProduct] = useState(1)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantityProduct((quantity) => quantity + Number(e.target.value))
  }

  const handleIncrement = () => {
    setQuantityProduct((quantityProduct) => quantityProduct + 1)
  }

  const handleDecrement = () => {
    if (quantityProduct > 0) setQuantityProduct(1)
    else setQuantityProduct((quantityProduct) => quantityProduct - 1)
  }

  const verificarValorAnterior = useCallback(() => {
    setTotal((total) => total + (quantityProduct - total))
    console.log(total, quantityProduct)
    if (total >= quantityProduct) setTotal(total + quantityProduct)
  }, [quantityProduct, setTotal, total])

  const value = useMemo(() => {
    return (productValue * quantityProduct).toFixed(2)
  }, [quantityProduct, productValue])

  const handleClick = () => {
    addProductInCart({
      ...productsData,
      quantity: quantityProduct,
      productValue: value,
    })
    verificarValorAnterior()
  }

  return (
    <S.FooterContainer>
      <S.ValueWrapper>
        <S.MoneySign>R$</S.MoneySign>
        <S.Value>{value}</S.Value>
      </S.ValueWrapper>
      <InputNumberProduct
        onDrecrement={handleDecrement}
        onIncrement={handleIncrement}
        onChange={() => handleInputChange}
        value={quantityProduct}
      />
      <S.ButtonAddToCart onClick={handleClick}>
        <ShoppingCart size={22} weight="fill" />
      </S.ButtonAddToCart>
    </S.FooterContainer>
  )
}
