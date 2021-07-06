import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
