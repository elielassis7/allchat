import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoBranca from '../assets/logo-branca.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menu = [
    { name: 'Home', path: '/' },
    { name: 'Produtos', path: '/product' },
    { name: 'Planos', path: '/plans' },
    { name: 'Consultoria', path: '/consultancy' },
    { name: 'Monitoramento', path: '/monitoring' },
    { name: 'Contato', path: '/contact' },
  ];

  return (
    <header className="bg-basecolor/40 backdrop-blur-md shadow-sm fixed z-30 w-screen">
      <div className="container mx-auto px-4 flex flex-row justify-between items-center w-full">



        <h2 className="text-2xl font-medium text-blue-400 flex flex-row items-center gap-2 py-2 pl-6 relative">
          <img
            src={LogoBranca}
            alt="Logo AllChat"
            className='h-8'

          />

        </h2>

        <nav className="hidden lg:flex lg:justify-around gap-3 xl:gap-5 pr-8 space-x-4 xl:space-x-6 text-lg font-primary-font *:py-2 *:transition-colors *:duration-700 *:ease-in-out *:text-transparent *:bg-gradient-to-r *:from-indigo-300 *:via-indigo-200 *:to-indigo-400 *:bg-clip-text *:hover:from-indigo-50 *:hover:via-indigo-200 *:hover:to-indigo-50 *:font-bold *:text-2xl">
          {menu.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className=" after:w-0 hover:after:w-full after:duration-700 after:ease-in-out  after:block after:h-0.5 after:bg-indigo-300"
            >
              {item.name}
            </Link>
          ))}

        </nav>




        <button
          className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block absolute h-0.5 w-8 bg-basecolor-fourth transform transition duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-45  bg-red-800' : '-translate-y-2 '
              }`}
          />
          <span
            className={`block absolute h-0.5 w-8 bg-basecolor-fourth transform transition duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
          />
          <span
            className={`block absolute h-0.5 w-8 bg-basecolor-fourth transform transition duration-300 ease-in-out ${mobileMenuOpen ? '-rotate-45  bg-red-800' : 'translate-y-2'
              }`}
          />
        </button>


      </div>


      {mobileMenuOpen && (
        <div className="lg:hidden bg-basecolor-third py-2 px-4 shadow-md">
          {menu.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block py-2 text-indigo-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

        </div>
      )}
    </header>
  );
}
