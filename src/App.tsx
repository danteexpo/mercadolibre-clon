import items from './items.json';
// components
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="min-w-[768px]">
      <Navbar />
      <Carousel />
      <main className="max-w-6xl mx-auto">
        <h1>Ofertas</h1>
        <ul>
          {items &&
            items.map((item) => (
              <li key={item.name}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
              </li>
            ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
