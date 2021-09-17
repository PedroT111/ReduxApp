import React from "react"
import Header from "./components/header"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Product from "./components/product"
import NewProduct from "./components/newProduct";
import EditProduct from "./components/editProduct";


//componnets

function App() {
  return (
    
    <Router>
      <Header/>
      <div className="conteiner mt-4 w-75 mx-auto">
        <Switch>
          <Route exact path="/" component={Product}/>
          <Route exact path="/product/new" component={NewProduct}/>
          <Route exact path="/product/edit/:id" component={EditProduct}/>
        </Switch>
      </div>




    </Router>      
    
  );
}

export default App;
