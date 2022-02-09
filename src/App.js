import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import PokemonListPage from './PokemonListPage';
import PokemonDetailPage from './PokemonDetailPage';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <PokemonListPage />
          </Route>
          <Route exact path="/pokemons/:id">
            {/* this route should point to a particular flower by id and render that specific FlowerDetail page */}
            <PokemonDetailPage />
          </Route>
        </Switch>
  
      </div>
    </Router>
    
  );
}

