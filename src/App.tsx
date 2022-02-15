import { Link, Route, Switch } from "react-router-dom";
import Books from "./screens/Books";
import Playground from "./screens/Playground";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link style={{ padding: 5 }} to="/">
          Home
        </Link>
        <Link style={{ padding: 5 }} to="/playground">
          Playground
        </Link>
        <Link style={{ padding: 5 }} to="/books">
          Books
        </Link>
        <Link style={{ padding: 5 }} to="/other">
          Other
        </Link>
      </nav>

      <main>
        <Switch>
          <Route exact path="/">
            <div>Home Screen</div>
          </Route>
          <Route strict path="/playground/">
            <Playground />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/other">
            <div>Something different</div>
          </Route>
          <Route>
            <div>404 Fehler!</div>
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
