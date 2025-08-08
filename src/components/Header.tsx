import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-basecolor/40 backdrop-blur-md shadow-sm fixed z-30 w-screen">
      <div className="container mx-auto px-4 flex flex-row justify-between items-center w-full">



        <h2 className="text-2xl font-medium text-blue-400 flex flex-row items-center gap-2 py-2 pl-8 relative">
          <img
            src="https://chat.allchat.com.br/favicon-32x32.png"
            alt="Logo AllChat"
            className='size-6'

          />
          allchat
        </h2>

        <nav className="hidden md:flex md:justify-around gap-5 pr-8 space-x-8 text-lg font-primary-font *:py-2 *:transition-colors *:duration-700 *:ease-in-out *:text-transparent *:bg-gradient-to-r *:from-indigo-300 *:via-indigo-200 *:to-indigo-400 *:bg-clip-text *:hover:from-indigo-50 *:hover:via-indigo-200 *:hover:to-indigo-50 *:font-bold *:text-2xl">
          <Link to="/" className=" after:w-0 hover:after:w-full after:duration-700 after:ease-in-out  after:block after:h-0.5 after:bg-indigo-300">Home</Link>
          <Link to="/product" className=" after:w-0 hover:after:w-full after:duration-700 after:ease-in-out  after:block after:h-0.5 after:bg-indigo-300">Produtos e Serviços</Link>
          <Link to="/plans" className=" after:w-0 hover:after:w-full after:duration-700 after:ease-in-out  after:block after:h-0.5 after:bg-indigo-300">Planos</Link>
          <Link to="/contact" className=" after:w-0 hover:after:w-full after:duration-700 after:ease-in-out  after:block after:h-0.5 after:bg-indigo-300">Contato</Link>
        </nav>


        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          Menu
        </button>

      </div>


      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-md">
          <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/features" className="block py-2 text-gray-700 hover:text-blue-600">Features</Link>
          <Link to="/pricing" className="block py-2 text-gray-700 hover:text-blue-600">Pricing</Link>
          <Link to="/contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</Link>
        </div>
      )}
    </header>
  );
}
