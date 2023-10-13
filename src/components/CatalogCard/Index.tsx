import * as T from './types'
import * as S from './styles'

export const CatalogCard = ({
  productImage,
  productName,
  description,
  coffeType,
  productValue,
}: T.CatalogCardProps) => {
  return (
    <div>
      <img src={productImage} alt="" />
      <div>
        {coffeType.map((type) => (
          <p key={type}>{type}</p>
        ))}
      </div>
      <div>
        <span>{productName}</span>
        <p>{description}</p>
      </div>
      <div>
        <div>
          <p>R$</p>
          <span>{productValue}</span>
        </div>
        <div>
          <S.InputAddProducts
            placeholder="Quantos quartos?"
            min={1}
            id="total"
            type="number"
          />
          <button onClick={() => {}} className="a">
            -
          </button>
          <button onClick={() => {}} className="b">
            +
          </button>
        </div>
        <button>Cart</button>
      </div>
    </div>
  )
}
