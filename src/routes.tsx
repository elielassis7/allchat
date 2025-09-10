import { Settings, Users } from 'lucide-react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { AdminLayout } from './pages/Admin/AdminLayout';
import { Content } from './pages/Admin/Content';
import { Dashboard } from './pages/Admin/Dashboard';
import { Checkout } from './pages/Checkout';
import { Consultancy } from './pages/Consultancy';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import Login from './pages/Login';
import { Monitoring } from './pages/Monitoring';
import { OurPlans } from './pages/OurPlans';
import { Product } from './pages/Product';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/plans' element={<OurPlans />} />
      <Route path="/login" element={<Login />} />
      <Route path='/monitoring' element={<Monitoring />} />
      <Route path='/consultancy' element={<Consultancy />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="settings" element={<Settings />} />
        <Route path="content" element={<Content />} />
        <Route path="users" element={<Users />} />
      </Route>
    </Routes>
  )
}