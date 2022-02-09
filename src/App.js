import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import FlowerListPage from './FlowerListPage';
import FlowerDetailPage from './FlowerDetailPage';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <FlowerListPage />
          </Route>
          <Route exact path="/flowers/:id">
            {/* this route should point to a particular flower by id and render that specific FlowerDetail page */}
            <FlowerDetailPage />
          </Route>
        </Switch>
  
      </div>
    </Router>
    
  );
}

