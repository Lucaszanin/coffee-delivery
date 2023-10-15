import { ShoppingCart } from 'phosphor-react'
import * as S from './styles'
import { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContex'
import { Link } from 'react-router-dom'

export const MinicarButton = () => {
  const { total } = useContext(ProductContext)

  return (
    <S.Container>
      {total > 0 && <S.Badge>{total}</S.Badge>}
      <Link to="checkout">
        <S.Button>
          <ShoppingCart size={22} weight="fill" />
        </S.Button>
      </Link>
    </S.Container>
  )
}
