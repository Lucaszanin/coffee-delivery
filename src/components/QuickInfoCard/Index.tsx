import * as S from './styles'
import * as T from './types'

export const QuickInfoCard = ({
  icon,
  text,
  backgroundiconcolor: backgroundIconColor,
}: T.QuickInfoCardProps) => (
  <S.CardContainer>
    <S.IconBackground backgroundiconcolor={backgroundIconColor}>
      {icon}
    </S.IconBackground>
    <S.TextInfo>{text}</S.TextInfo>
  </S.CardContainer>
)
