import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import * as S from './styles'
import { PaymentOptionButton } from './components/PaymentOptionButton/Index'
import { Cart } from '../../components/Cart/Index'

export const Checkout = () => {
  return (
    <S.Container>
      <div>
        <S.Title>Complete seu pedido</S.Title>
        <S.ContainerCard>
          <S.WrapperHeader>
            <MapPinLine size={22} weight="regular" color="#C47F17" />
            <S.WrapperText>
              <S.HighlightedText>Endereço de Entrega</S.HighlightedText>
              <S.NormalText>
                Informe o endereço onde deseja receber seu pedido
              </S.NormalText>
            </S.WrapperText>
          </S.WrapperHeader>
          <form>
            <S.BaseInput width={'40%'} type="text" placeholder="CEP" />
            <S.BaseInput type="text" placeholder="RUA" />
            <S.ContainerInputs>
              <S.BaseInput width={'40%'} type="text" placeholder="Número" />
              <S.BaseInput
                width={'60%'}
                type="text"
                placeholder="Complemento"
              />
            </S.ContainerInputs>
            <S.ContainerInputs>
              <S.BaseInput width={'40%'} type="text" placeholder="Bairro" />
              <S.BaseInput width={'50%'} type="text" placeholder="Cidade" />
              <S.BaseInput width={'10%'} type="text" placeholder="ES" />
            </S.ContainerInputs>
          </form>
        </S.ContainerCard>
        <S.ContainerCard>
          <S.WrapperHeader>
            <CurrencyDollar size={22} weight="regular" color="#8047F8" />
            <S.WrapperText>
              <S.HighlightedText>Pagamento</S.HighlightedText>
              <S.NormalText>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </S.NormalText>
            </S.WrapperText>
          </S.WrapperHeader>
          <S.ButtonsWrapper>
            <PaymentOptionButton
              text="Cartão de crédito"
              icon={<CreditCard size={16} weight="regular" color="#8047F8" />}
            />{' '}
            <PaymentOptionButton
              text="Cartão de débito"
              icon={<Bank size={16} weight="regular" color="#8047F8" />}
            />
            <PaymentOptionButton
              text="Dinheiro"
              icon={<Money size={16} weight="regular" color="#8047F8" />}
            />
          </S.ButtonsWrapper>
        </S.ContainerCard>
      </div>
      <div>
        <S.Title>Cafés selecionados</S.Title>
        <S.ContainerCard>
          <S.ContentWrapper>
            <Cart
              productName={'Café Expresso'}
              productQuantity={1}
              totalValue={'R$ 9,90'}
              productImageName={'coffe-americano'}
              onDrecrement={() => {}}
              onIncrement={() => {}}
              onChange={() => {}}
            />

            <div style={{ display: 'flex' }}>
              <div>
                <p>Total de itens</p>
                <p>Entrega</p>
                <span>Total</span>
              </div>
              <div>
                <p>R$ 29,70</p>
                <p>R$ 3,50</p>
                <span>R$ 33,20</span>
              </div>
            </div>
            <button style={{ padding: '1rem' }}>confirmar pedido</button>
          </S.ContentWrapper>
        </S.ContainerCard>
      </div>
    </S.Container>
  )
}