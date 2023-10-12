import { Route, Routes } from 'react-router-dom'
import DefaultLayout from '../layouts/DefaultLayout/Index'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}></Route>
    </Routes>
  )
}

export default Router
