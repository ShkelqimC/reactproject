import Pokemonlist from './components/Pokemonlist'
import './App.css';
import Navigation from './components/Navigation';
import Home from './routes/Home';
import Pokemons from './routes/Pokemons';
import { Route, Router, Switch } from 'react-router-dom'


function App() {
  return (

    <div className="App">
      <div>

        <Navigation />
      </div>


    </div>
  );
}

export default App;
