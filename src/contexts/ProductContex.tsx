import { createContext, useCallback, useState } from 'react'
import * as T from './types'
import { ProductsDataProps } from '../productsData/types'

export const ProductContext = createContext({} as T.ProductContextProps)

export function ProductContextProvider({ children }: T.ProductContextReturn) {
  const [total, setTotal] = useState(0)
  const [value, setValue] = useState(0)
  const [quantityItem, setQuantityItem] = useState(0)
  const [products, setProducts] = useState<ProductsDataProps[]>([])

  const addProductInCart = useCallback(
    (datanew: T.Product) => {
      const itemIndex = products.findIndex(
        (item) => item.productId === datanew.productId,
      )

      if (itemIndex !== -1) {
        const updatedProducts = [...products]
        updatedProducts[itemIndex] = {
          ...updatedProducts[itemIndex],
          quantity: updatedProducts[itemIndex].quantity + datanew.quantity,
        }

        setProducts(updatedProducts)
      } else {
        setProducts((prevProducts) => [...prevProducts, datanew])
      }
    },
    [products],
  )

  return (
    <ProductContext.Provider
      value={{
        total,
        addProductInCart,
        products,
        setTotal,
        quantityItem,
        setQuantityItem,
        setValue,
        value,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
