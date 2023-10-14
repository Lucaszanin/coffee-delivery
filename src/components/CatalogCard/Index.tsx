import * as T from './types'
import * as S from './styles'
import { FooterCard } from './FooterCard/Index'

export const CatalogCard = ({
  productImageUrl: productImage,
  productName,
  description,
  coffeType,
  productValue,
}: T.CatalogCardProps) => {
  return (
    <S.CardContainer>
      <S.ImageContainer>
        <img src={productImage} alt="" />
      </S.ImageContainer>
      <S.BadgeTypeContainer>
        {coffeType.map((type) => (
          <S.BadgeTypeText key={type}>{type}</S.BadgeTypeText>
        ))}
      </S.BadgeTypeContainer>
      <S.DetailsWrapper>
        <S.ProductName>{productName}</S.ProductName>
        <S.ProductDescription>{description}</S.ProductDescription>
      </S.DetailsWrapper>
      <FooterCard productValue={productValue} />
    </S.CardContainer>
  )
}
