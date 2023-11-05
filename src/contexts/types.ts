import { ReactNode } from 'react'
import { ProductsDataProps } from '../productsData/types'

export type Product = ProductsDataProps & {
  quantity: number
  productId?: string
}

export type ProductContextProps = {
  total: number
  setTotal: React.Dispatch<React.SetStateAction<number>>
  quantityProduct: number
  setQuantityProduct: React.Dispatch<React.SetStateAction<number>>
  addProductInCart: (datanew: Product) => void
  product: ProductsDataProps[]
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
}

export type ProductsData = {
  data: Product[]
}

export type ProductContextReturn = { children: ReactNode }
