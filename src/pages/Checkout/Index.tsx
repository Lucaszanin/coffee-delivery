import { InputNumberProduct } from '../../components/InputProductNumber/Index'
import { SVG } from '../../components/SVG/Index'
import * as S from './styles'

export const Checkout = () => {
  return (
    <S.Container>
      <div>
        <span>Complete seu pedido</span>
        <div>
          <div>
            <span>Endereço de Entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
          <form>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="RUA" />
            <div>
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
            </div>
            <div>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="Estado" />
            </div>
          </form>
        </div>
        <div>
          <span>Pagamento</span>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button>Cartão de crédito</button>
            <button>Cartão de débito</button>
            <button>Dinheiro</button>
          </div>
        </div>
      </div>
      <div>
        <span>Cafés selecionados</span>
        <div>
          <div>
            <div style={{ display: 'flex' }}>
              <div>
                <SVG name="coffe-expresso" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p>Expresso Tradicional</p>
                <div style={{ display: 'flex' }}>
                  <InputNumberProduct
                    onDrecrement={() => {}}
                    onIncrement={() => {}}
                    onChange={() => {}}
                    value={1}
                  />
                  <button>Remover</button>
                </div>
              </div>
              <div>
                <span>R$9,90</span>
              </div>
            </div>
            <hr />
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
          </div>
        </div>
      </div>
    </S.Container>
  )
}
