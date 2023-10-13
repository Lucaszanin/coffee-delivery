import { HeaderContainer, LocalizationCard, ContainerButtons } from './styles'
import logoCoffeDelivery from '../../assets/Logo.svg'
import { MapPin } from 'phosphor-react'
import { MinicarButton } from '../MiniCartButton/Index'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logoCoffeDelivery} alt="Logo da Cafeteria Coffee Delivery" />
      <ContainerButtons>
        <LocalizationCard>
          <MapPin size={22} weight="fill" color="#8047F8" />
          São Paulo,SP
        </LocalizationCard>
        <MinicarButton itensCount={1} />
      </ContainerButtons>
    </HeaderContainer>
  )
}
