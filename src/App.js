import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import ProductDetails from "./components/ProductDestails";
import Products from "./components/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/Products/:name/:id" component={ProductDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
