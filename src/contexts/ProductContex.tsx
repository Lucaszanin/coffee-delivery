import { createContext, useState } from 'react'
import * as T from './types'

export const ProductContext = createContext({} as T.ProductContextProps)

export function ProductContextProvider({ children }: T.ProductContextReturn) {
  const [total, setTotal] = useState(0)
  return (
    <ProductContext.Provider
      value={{
        total,
        setTotal,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
