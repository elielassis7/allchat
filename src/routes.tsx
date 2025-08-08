import { Route, Routes } from 'react-router-dom';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { OurPlans } from './pages/OurPlans';
import { Product } from './pages/Product';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/plans' element={<OurPlans />} />
    </Routes>
  )
}