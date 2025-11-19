import Greeting from './components/Greeting';
import Footer from './components/Footer';
import './App.css';
import PizzaMenu from './components/PizzaMenu';

// javascript funtio joka palauttaa JSX
const App = () => {
  const sitename = 'WSK';
  const styles = {
    backgroundColor: 'gray',
    color: 'white',
  };

  return (
    <>
      <h1 style={styles}>{sitename} sivusto</h1>
      <div style={{color: 'red'}}>APP </div>
      <Greeting name="Ulla" age={34} isTeacher={true} />
      <Greeting name="Matti" age={22} isTeacher={false} />
      <PizzaMenu />
      <Footer></Footer>
    </>
  );
};
export default App;