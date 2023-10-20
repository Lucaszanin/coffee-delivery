import { createContext, useCallback, useState } from 'react'
import * as T from './types'

export const ProductContext = createContext({} as T.ProductContextProps)

export function ProductContextProvider({ children }: T.ProductContextReturn) {
  const [total, setTotal] = useState(0)
  const [quantityProduct, setQuantityProduct] = useState(1)
  const [product, setProduct] = useState<T.Product[]>([])

  const addProductInCart = useCallback(
    (datanew: T.Product) => {
      const newData: T.Product = {
        imageProduct: datanew.imageProduct,
        productId: String(new Date().getTime()),
        productName: datanew.productName,
        productValue: datanew.productValue,
        quantity: datanew.quantity,
      }

      setProduct((state) => [...state, newData])
    },
    [setProduct],
  )

  return (
    <ProductContext.Provider
      value={{
        total,
        addProductInCart,
        product,
        setTotal,
        quantityProduct,
        setQuantityProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
