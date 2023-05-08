import { useState } from 'react';
// img
import MercadoLibreLogo from '../assets/mercadolibrelogo.svg';
import DisneyAd from '../assets/disney.svg';
import Lupa from '../assets/lupa.svg';
import Mapa from '../assets/mapa.svg';
import Abajo from '../assets/abajo.svg';
import Usuario from '../assets/usuario.svg';
import Campana from '../assets/campana.svg';
import Carrito from '../assets/carrito.svg';

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
    <nav className="bg-[#FFF159] p-2 pb-3 shadow">
      <div className="max-w-6xl mx-auto flex flex-col gap-4">
        <span className="flex justify-between items-center gap-8 lg:gap-12 xl:gap-16 2xl:gap-20">
          <img src={MercadoLibreLogo} alt="" className="h-8" />
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
          <img src={DisneyAd} alt="" className="h-10" />
        </span>
        <span className="grid grid-cols-[1fr_3fr_2fr] font-light text-sm">
          <ul>
            <li className="flex items-center gap-2">
              <img
                src={Mapa}
                alt=""
                className="h-5 opacity-60 cursor-pointer"
              />
              <p className="opacity-60 hover:opacity-90 cursor-pointer">
                Enviar a casa
              </p>
            </li>
          </ul>
          <ul className="flex items-center gap-4">
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
          <ul className="place-self-end flex items-center gap-4">
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
        </span>
      </div>
    </nav>
  );
};
export default Navbar;
