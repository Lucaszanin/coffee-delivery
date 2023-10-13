import { ShoppingCart } from 'phosphor-react'
import * as S from './styles'
import type * as T from './types'

export const MinicarButton = ({ itensCount }: T.MinicarButtonProps) => (
  <S.Container>
    {itensCount > 0 && <S.Badge>{itensCount}</S.Badge>}
    <S.Button>
      <ShoppingCart size={22} weight="fill" />
    </S.Button>
  </S.Container>
)
