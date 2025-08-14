import { Settings, Users } from 'lucide-react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLayout from './pages/admin/AdminLayout';
import Content from './pages/admin/Content';
import Dashboard from './pages/admin/Dashboard';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import Login from './pages/Login';
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