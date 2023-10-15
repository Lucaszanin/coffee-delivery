import { createContext, useState } from 'react'
import * as T from './types'

export const ProductContext = createContext({} as T.ProductContextProps)

export function ProductContextProvider({ children }: T.ProductContextReturn) {
  const [total, setTotal] = useState(0)
  const [quantityProduct, setQuantityProduct] = useState(1)
  return (
    <ProductContext.Provider
      value={{
        total,
        setTotal,
        quantityProduct,
        setQuantityProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
