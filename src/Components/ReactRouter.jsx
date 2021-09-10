import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import HomePage from "./homePage/HomePage";
import Category from "./category/Category";
import Product from "./product/ProductPage";
import ContactPage from "../components/contact/ContactPage";

export default function ReactRouter() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/category/:id" component={Category} />
        <Route path="/product/:categoryId/:id" component={Product} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  );
}
