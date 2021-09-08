import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import HomePage from "./homePage/HomePage";
import Category from "./Category";
import Product from "./Product";
import Contact from "./Contact";

export default function ReactRouter() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/category:id" component={Category} />
        <Route path="/product" component={Product} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}
