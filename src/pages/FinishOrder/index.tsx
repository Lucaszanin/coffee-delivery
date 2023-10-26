import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import  DeliveryImage  from '../../assets/delivery.svg'
import * as S from './styles'

export const FinishOrderPage = () => {
  return (
    <S.Container>
      <S.WrapperContentLeft>
        <S.Title>Uhu! Pedido confirmado</S.Title>
        <S.SubTitle>
          Agora é só aguardar que logo o café chegará até você
        </S.SubTitle>
        <S.WrapperInformation>
          <S.ContainerDetail>
            <S.RoundedBackgroundIcon backgroundColors="purple">
              <MapPin weight="fill" />
            </S.RoundedBackgroundIcon>
            <S.ContainerDetailText>
              <S.WrapperDetailText>
                <S.DetailText bold={false}>
                  Entrega em
                  <S.DetailText bold>Rua João Miguel 148</S.DetailText>
                </S.DetailText>
              </S.WrapperDetailText>
              <S.DetailText bold={false}>
                Farrapos - Porto Alegre, RS
              </S.DetailText>
            </S.ContainerDetailText>
          </S.ContainerDetail>
          <S.ContainerDetail>
            <S.RoundedBackgroundIcon backgroundColors="yellowMid">
              <Timer weight="fill" />
            </S.RoundedBackgroundIcon>
            <S.ContainerDetailText>
              <S.DetailText bold={false}>Previsão de entrega</S.DetailText>
              <S.DetailText bold>30 min</S.DetailText>
            </S.ContainerDetailText>
          </S.ContainerDetail>
          <S.ContainerDetail>
            <S.RoundedBackgroundIcon backgroundColors="yellowDark">
              <CurrencyDollar weight="regular" />
            </S.RoundedBackgroundIcon>
            <S.ContainerDetailText>
              <S.DetailText bold={false}>Pagamento na entrega</S.DetailText>
              <S.DetailText bold>Dinheiro</S.DetailText>
            </S.ContainerDetailText>
          </S.ContainerDetail>
        </S.WrapperInformation>
      </S.WrapperContentLeft>
      <S.WrapperContentRight>
        <img src={DeliveryImage} alt="" />
      </S.WrapperContentRight>
    </S.Container>
  )
}
