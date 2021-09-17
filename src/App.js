import React from "react"
import Header from "./components/header"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
//componnets
import Product from "./components/product"
import NewProduct from "./components/newProduct";
import EditProduct from "./components/editProduct";
//Redux
import {Provider} from "react-redux";
import store from "./core/store";

function App() {
  return (
    
    <Router>
      <Provider store={store}>
        <Header/>
        <div className="conteiner mt-4 w-75 mx-auto">
          <Switch>
            <Route exact path="/" component={Product}/>
            <Route exact path="/product/new" component={NewProduct}/>
            <Route exact path="/product/edit/:id" component={EditProduct}/>
          </Switch>
        </div>
      </Provider>
    </Router>      
    
  );
}

export default App;
