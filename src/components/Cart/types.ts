import type { SVGProps } from '../SVG/types'

export type CartProps = {
  productName: string
  productQuantity: number
  totalValue: string
  productImageName: SVGProps['name']
  onDrecrement: () => void
  onIncrement: () => void
  onChange: () => void
}
