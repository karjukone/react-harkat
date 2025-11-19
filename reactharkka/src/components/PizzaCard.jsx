import pizzaImg from "../assets/images/pizza.jpg";
import PizzaMenu from "./PizzaMenu";

const PizzaCard = (props) => {
  const {pizza, addToCart} = props;

  console.log(props);
  return (
    <>
      <div className="card">
        <h2>{pizza.name}</h2>
        <div>Pizzainfo</div>
        <div>Hinta {pizza.price}€</div>
        <img src={pizzaImg} alt="" srcSet="" />
        <button onClick={addToCart}>Lisää yksi</button>
      </div>
    </>
  );
};

export default PizzaCard;
