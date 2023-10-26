import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout/Index'
import { Home } from '../pages/Home/Index'
import { Checkout } from '../pages/Checkout/Index'
import { FinishOrderPage } from '../pages/FinishOrder'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="/finishorderpage" element={<FinishOrderPage />} />
      </Route>
    </Routes>
  )
}
