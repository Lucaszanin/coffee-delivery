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
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContex'

export const Checkout = () => {
  const { products, value } = useContext(ProductContext)

  return (
    products && (
      <S.Container>
        <S.LeftContent>
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
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
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
        </S.LeftContent>
        <S.RightContent>
          <S.Title>Cafés selecionados</S.Title>
          <S.ContainerCard isdetails>
            {products.map((product) => (
              <Cart
                key={product.productName}
                productName={product.productName}
                productQuantity={product.quantity}
                totalValue={String(product.productValue)}
                productImageName={product.imageProduct}
                onDrecrement={() => {}}
                onIncrement={() => {}}
                onChange={() => {}}
              />
            ))}

            <S.FooterContainer>
              <S.LineContent>
                <S.DetailText>Total de itens</S.DetailText>
                <S.DetailValue>R$ {value}</S.DetailValue>
              </S.LineContent>
              <S.LineContent>
                <S.DetailText>Entrega</S.DetailText>
                <S.DetailValue>R$ 3,50</S.DetailValue>
              </S.LineContent>
              <S.LineContent>
                <S.DetailText bold>Total</S.DetailText>
                <S.DetailValue bold>R$ {value + 3.5}</S.DetailValue>
              </S.LineContent>
            </S.FooterContainer>
            <Link to="/finishorderpage">
              <S.SendOrderButton>confirmar pedido</S.SendOrderButton>
            </Link>
          </S.ContainerCard>
        </S.RightContent>
      </S.Container>
    )
  )
}
