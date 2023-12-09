import * as T from './types'
import * as S from './styles'
import { InputNumberProduct } from '../InputProductNumber/Index'

import { Trash } from 'phosphor-react'

export const Cart = ({
  productName,
  productQuantity,
  productImageName,
  totalValue,
  onDrecrement,
  onIncrement,
  onChange,
}: T.CartProps) => {
  return (
    <S.ContainerWrapper>
      <S.Container>
        <S.ImageWrapper>{productImageName}</S.ImageWrapper>

        <S.ContentMidWrapper>
          <S.ProductName>{productName}</S.ProductName>
          <S.InputWrapper>
            <InputNumberProduct
              onDrecrement={onDrecrement}
              onIncrement={onIncrement}
              onChange={onChange}
              quantity={productQuantity}
            />
            <S.RemoveButton>
              <Trash size={16} weight="regular" color="#8047F8" />
              Remover
            </S.RemoveButton>
          </S.InputWrapper>
        </S.ContentMidWrapper>
        <S.ProductValue>R$ {totalValue}</S.ProductValue>
      </S.Container>
      <S.Divider />
    </S.ContainerWrapper>
  )
}
