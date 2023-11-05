import { ReactNode } from 'react'
import { ProductsDataProps } from '../../productsData/types'

export type CaffeTypes =
  | 'Tradicional'
  | 'Gelado'
  | 'Com Leite'
  | 'Especial'
  | 'Alcoólico'

export type CatalogCardProps = {
  imageProduct: ReactNode
  productName: string
  description: string
  coffeType: CaffeTypes[]
  productValue: number
  productData: ProductsDataProps
}
