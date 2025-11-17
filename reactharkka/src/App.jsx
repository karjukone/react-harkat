import './App.css'
import Home from './components/Home';
import Footer from './components/Footer';
import PizzaMenu from './components/PizzaMenu';
import PizzaCard from './components/PizzaCard';

 const App = () => {
   return (
     <>
       <h1>My App</h1>
       <Home/>
       <PizzaMenu/> 
        <PizzaCard/>
       <Footer/>
     </>
   );
 };
 export default App;