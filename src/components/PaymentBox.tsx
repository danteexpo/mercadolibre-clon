// img
import Pagar from '../assets/payment_box/pagar.svg';
import Mas from '../assets/payment_box/mas.svg';

const paymentList = [
  'Tarjeta de crédito',
  'Tarjeta de débito',
  'Cuotas sin tarjeta',
];

const PaymentBox = () => {
  return (
    <div className="bg-white rounded shadow p-6 flex justify-between">
      <ul className="flex justify-between items-center w-full">
        {paymentList.map((item) => (
          <li key={item} className="flex items-center gap-4">
            <img src={Pagar} alt="" className="cursor-pointer" />
            <span>
              <p className="text-base">{item}</p>
              <p className="text-[#3483fa] text-sm cursor-pointer hover:text-[#1259c3]">
                Ver más
              </p>
            </span>
          </li>
        ))}
      </ul>
      <img src={Mas} alt="" className="pl-6 border-l ml-6" />
    </div>
  );
};
export default PaymentBox;
