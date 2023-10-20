import { createContext, useCallback, useState } from 'react'
import * as T from './types'
import { ProductsDataProps } from '../productsData/types'

export const ProductContext = createContext({} as T.ProductContextProps)

export function ProductContextProvider({ children }: T.ProductContextReturn) {
  const [total, setTotal] = useState(0)
  const [quantityProduct, setQuantityProduct] = useState(1)
  const [product, setProduct] = useState<ProductsDataProps[]>([])

  const addProductInCart = useCallback((datanew: T.Product) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const newData: ProductsDataProps = {
      imageProduct: datanew.imageProduct,
      productId: String(new Date().getTime()),
      productName: datanew.productName,
      productValue: datanew.productValue,
      quantity: datanew.quantity,
      productDescription: '',
      coffeType: [],
    }

    setProduct((state) => [...state, newData])
  }, [])

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
