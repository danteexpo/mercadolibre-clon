import { useState } from 'react';
// img
import MercadoLibreLogo from '../assets/navbar/mercadolibrelogo.svg';
import DisneyAd from '../assets/navbar/disney.svg';
import Lupa from '../assets/navbar/lupa.svg';
import Mapa from '../assets/navbar/mapa.svg';
import Abajo from '../assets/navbar/abajo.svg';
import Usuario from '../assets/navbar/usuario.svg';
import Campana from '../assets/navbar/campana.svg';
import Carrito from '../assets/navbar/carrito.svg';

const generalList = [
  { name: 'Categorías', icon: null },
  { name: 'Ofertas', icon: null },
  { name: 'Historial', icon: null },
  { name: 'Vender', icon: null },
  { name: 'Ayuda', icon: null },
];

const personalList = [
  { name: null, icon: Usuario },
  { name: 'Mis compras', icon: null },
  { name: 'Favoritos', icon: null },
  { name: null, icon: Campana },
  { name: null, icon: Carrito },
];

const Navbar = () => {
  const [input, setInput] = useState('');

  return (
    <nav className="bg-[#FFF159] p-2 pb-1 shadow">
      <div className="max-w-6xl mx-auto grid grid-rows-2 grid-cols-[130px_1fr_1fr] lg:grid-cols-[140px_3fr_2fr] place-content-center gap-x-8 gap-y-2">
        <a
          href="https://www.mercadolibre.com.ar/"
          rel="noreferrer"
          target="_blank"
          className="w-72"
        >
          <img src={MercadoLibreLogo} alt="" className="h-8" />
        </a>
        <span className="relative w-full">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full shadow py-2 pl-4 pr-8 md:pr-10 rounded-sm outline-none placeholder:font-light placeholder:opacity-90"
            placeholder="Buscar productos, marcas y más..."
          />
          <img
            src={Lupa}
            alt=""
            className="absolute right-2 md:right-3 bottom-3 h-4 opacity-60 border-l pl-4 cursor-pointer"
          />
        </span>
        <img src={DisneyAd} alt="" className="h-10 place-self-end" />
        <ul className="flex items-center font-light text-sm">
          <li className="flex items-center gap-2">
            <img src={Mapa} alt="" className="h-5 opacity-60 cursor-pointer" />
            <p className="opacity-60 hover:opacity-90 cursor-pointer">
              Enviar a casa
            </p>
          </li>
        </ul>
        <ul className="flex items-center gap-4 font-light text-sm">
          {generalList.map((item, i) => (
            <li
              key={i}
              className={`${item.icon ? 'flex items-center gap-1' : ''}`}
            >
              {item.name && (
                <p className="opacity-60 hover:opacity-90 cursor-pointer">
                  {item.name}
                </p>
              )}
            </li>
          ))}
        </ul>
        <ul className="flex justify-end items-center gap-4 font-light text-sm">
          {personalList.map((item, i) => (
            <li
              key={i}
              className={`${item.name ? 'flex items-center gap-1' : ''}`}
            >
              {item.name && (
                <>
                  <p className="opacity-60 hover:opacity-90 cursor-pointer">
                    {item.name}
                  </p>
                  <img src={Abajo} alt="" className="w-2 opacity-25" />
                </>
              )}
              {item.icon && (
                <img
                  src={item.icon}
                  alt=""
                  className="h-5 opacity-60 cursor-pointer"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
