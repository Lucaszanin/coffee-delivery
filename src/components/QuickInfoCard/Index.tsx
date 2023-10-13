import * as S from './styles'
import * as T from './types'

export const QuickInfoCard = ({
  icon,
  text,
  backgroundIconColor,
}: T.QuickInfoCardProps) => (
  <S.CardContainer>
    <S.IconBackground backgroundIconColor={backgroundIconColor}>
      {icon}
    </S.IconBackground>
    <S.TextInfo>{text}</S.TextInfo>
  </S.CardContainer>
)