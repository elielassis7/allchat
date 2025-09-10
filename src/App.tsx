import { BrowserRouter as Router } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AuthProvider } from './context/AuthContext';
import './global.css';
import { AppRoutes } from './routes';
import WhatsAppIcon from '/whatsapp-color.svg';

export function App() {
  return (
    <Router basename='/allchat/'>
      <a
        type="button"
        href="https://wa.me/554432202120"
        target="_blank"
        className="z-30 fixed bottom-8 right-6 size-10 lg:size-16 rounded-full bg-[#25D366] cursor-pointer hover:-translate-y-1 active:scale-95 transform duration-300 ease-linear"
      >
        <img src={WhatsAppIcon} alt="" className="size-full" />
      </a>
      <AuthProvider>
        <Header />
        <AppRoutes />
        <Footer />
      </AuthProvider>
    </Router>
  );
}


