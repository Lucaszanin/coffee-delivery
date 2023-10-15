import { HeaderContainer, LocalizationCard, ContainerButtons } from './styles'
import logoCoffeDelivery from '../../assets/logo.svg'
import { MapPin } from 'phosphor-react'
import { MinicarButton } from '../MiniCartButton/Index'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoCoffeDelivery} alt="Logo da Cafeteria Coffee Delivery" />
      </Link>
      <ContainerButtons>
        <LocalizationCard>
          <MapPin size={22} weight="fill" color="#8047F8" />
          São Paulo,SP
        </LocalizationCard>
        <MinicarButton />
      </ContainerButtons>
    </HeaderContainer>
  )
}
