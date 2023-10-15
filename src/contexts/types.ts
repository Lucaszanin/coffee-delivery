import { ReactNode } from 'react'

export type ProductContextProps = {
  total: number
  setTotal: React.Dispatch<React.SetStateAction<number>>
  quantityProduct: number
  setQuantityProduct: React.Dispatch<React.SetStateAction<number>>
}

export type ProductContextReturn = { children: ReactNode }
