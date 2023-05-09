// components
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import PaymentBox from './components/PaymentBox';
import Offers from './components/Offers';

function App() {
  return (
    <div className="min-w-[768px]">
      <Navbar />
      <Carousel />
      <main className="mt-8 max-w-6xl mx-auto p-4 2xl:p-2 flex flex-col gap-8">
        <PaymentBox />
        <Offers />
      </main>
    </div>
  );
}

export default App;
