import React, { Component } from "react";
import { Provider } from "react-redux";
// import Products from "./components/Products";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import Basket from "./components/Basket";
import Products from "./components/Products";
import Homepage from "./components/Homepage";
import BootstrapNavbar from './components/Navbar';
import store from "./store";
import "./App.css";
import Copyright from "./components/Copyright";
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
      <Provider store={store}>
        
        
        <div className="main">
        <div className="App-header">
            <BootstrapNavbar />
            <Route path="/Basket">
                <Basket />
              </Route>
              <Route path="/Products"> 
                <Products />
              </Route>
              <Route path="/Homepage">
                <Homepage />
              </Route>
        <img src="\assets\logo\logo6.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Copyright />
            </div>
          </div>
        </div>
        </div>
        </Provider>
        </Switch>
        </Router>
    );
  }
}

export default App;