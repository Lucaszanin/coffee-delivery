import * as T from './types'
import * as S from './styles'
import { ShoppingCart } from 'phosphor-react'
import { ChangeEvent, useCallback, useContext, useMemo, useState } from 'react'
import { ProductContext } from '../../../contexts/ProductContex'
import { InputNumberProduct } from '../../InputProductNumber/Index'

export const FooterCard = ({
  productValue,
  productData,
}: T.FooterCardProps) => {
  const { setTotal, total, addProductInCart, setValue, setQuantityItem } =
    useContext(ProductContext)

  const [quantityProduct, setQuantityProduct] = useState(1)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // setQuantityProduct((quantity) => quantity + Number(e.target.value))
    setQuantityItem((quantity) => quantity + Number(e.target.value))
  }

  const handleIncrement = () => {
    setQuantityProduct((quantityProduct) => quantityProduct + 1)
  }

  const handleDecrement = () => {
    if (quantityProduct > 0) {
      setQuantityProduct(1)
    } else {
      setQuantityProduct((quantityProduct) => quantityProduct - 1)
    }
  }

  const verificarValorAnterior = useCallback(() => {
    setTotal((total) => total + (quantityProduct - total))

    if (total >= quantityProduct) {
      setTotal(total + quantityProduct)
    }
  }, [quantityProduct, setTotal, total])

  const value = useMemo(() => {
    return Number((productValue * quantityProduct).toFixed(2))
  }, [productValue, quantityProduct])

  const handleClick = () => {
    // setQuantityProduct(quantityProduct)
    setQuantityItem(quantityProduct)
    setValue((valueAnt) => valueAnt + value)

    addProductInCart({
      ...productData,
      quantity: quantityProduct,
      productValue: value,
      productId: productData.productId,
      imageProduct: productData.imageProduct,
      productName: productData.productName,
      productDescription: productData.productDescription,
      coffeType: productData.coffeType,
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
        quantity={quantityProduct}
      />
      <S.ButtonAddToCart onClick={handleClick}>
        <ShoppingCart size={22} weight="fill" />
      </S.ButtonAddToCart>
    </S.FooterContainer>
  )
}
