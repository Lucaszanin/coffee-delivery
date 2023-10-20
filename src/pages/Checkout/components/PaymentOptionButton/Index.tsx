import * as T from './types'
import * as S from './styles'

export const PaymentOptionButton = ({
  text,
  icon,
}: T.PaymentOptionButtonProps) => {
  return (
    <S.Button>
      {icon}
      {text}
    </S.Button>
  )
}
