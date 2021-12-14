import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Main from './views/Main/Main';
import Books from './views/Books/Books';
import Characters from './views/Characters/Characters';
import Films from './views/Films/Films';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavLink to="/">Main</NavLink>
        <NavLink to="/Books">Books</NavLink>
        <NavLink to="/Characters">Characters</NavLink>
        <NavLink to="/Films">Films</NavLink>

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/books">
            <Books />
          </Route>
          <Route exact path="/characters">
            <Characters />
          </Route>
          <Route exact path="/films">
            <Films />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
