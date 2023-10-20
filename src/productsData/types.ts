import { ReactNode } from 'react'
import type { CaffeTypes } from '../components/CatalogCard/types'

export type ProductsDataProps = {
  imageProduct: ReactNode
  productName: string
  productValue: number | string
  productDescription: string
  coffeType: CaffeTypes[]
}

export type ProductsData = {
  data: ProductsDataProps[]
}
