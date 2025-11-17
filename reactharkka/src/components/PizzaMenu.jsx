import PizzaCard from './PizzaCard';
import {useState} from 'react';

const pizzas = [
  {id: 1, name: 'Margarita', price: 12},
  {id: 2, name: 'Vege', price: 5},
  {id: 3, name: 'Americano', price: 20},
];

const PizzaMenu = () => {
  const [cart, setCart] = useState(0);

  // kun lapsikomponentti pyytää lisäämään yhden pizzan
  // ajetaan tämä parent elementin funktio

  const addToCart = () => {
    setCart((prev) => prev + 1);
  };

  return (
    <>
      <h3>PizzaMenu</h3>
      <div>Tässä alla herkulliset pizzat</div>
      <div>Ostoskorissa on tällä hetkellä {cart} tuotetta</div>
      <div className="container">
        {pizzas.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
};

export default PizzaMenu;