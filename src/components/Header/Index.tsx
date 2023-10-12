import { HeaderContainer } from './styles'
import logoCoffeDelivery from '../../assets/Logo.svg'
import { ShoppingCart, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeDelivery} alt="" />
      <nav>
        <NavLink to="/" title="Coffe Delivery">
          <ShoppingCart size={20} weight="fill" />
        </NavLink>
        <NavLink to="/checkout" title="Checkout">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

export default Header
