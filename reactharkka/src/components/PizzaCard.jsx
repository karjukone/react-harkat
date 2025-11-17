import pizzaImg from './assets/images/pizza.jpg';

const PizzaCard = (props) => {
  const {pizza, addToCart} = props;

  console.log(props);
  return (
    <>
      <div className="card">
        <h2>{pizza.name}</h2>
        <div>Pizzainfo</div>
        <div>Hinta {pizza.price}€</div>
        <img src={pizzaImg} alt="" srcset="" />
        <button onClick={addToCart}>Lisää yksi</button>
      </div>
    </>
  );
};

export default PizzaCard;

<img src="https://placehold.co/200x150/lightgreen/white" alt="pic of pizza"></img>