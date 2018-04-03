import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import ErrorPage from "./ErrorPage";
import "../style/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
