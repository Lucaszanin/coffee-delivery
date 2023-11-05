import { ReactNode } from 'react'

export type CartProps = {
  productName: string
  productQuantity?: number
  totalValue: string
  productImageName: ReactNode
  onDrecrement: () => void
  onIncrement: () => void
  onChange: () => void
}
