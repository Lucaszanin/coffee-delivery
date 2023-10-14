import { ShoppingCart } from 'phosphor-react'
import * as S from './styles'
import { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContex'

export const MinicarButton = () => {
  const { total } = useContext(ProductContext)

  return (
    <S.Container>
      {total > 0 && <S.Badge>{total}</S.Badge>}
      <S.Button href="/checkout">
        <ShoppingCart size={22} weight="fill" />
      </S.Button>
    </S.Container>
  )
}
