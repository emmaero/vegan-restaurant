import React from "react";
import Hero from "./Hero";
import CategorySection from "./CategorySection";
import ComponentList from "../ComponentList";
import drinks from "../../data/drinks.json";
import dishes from "../../data/dishes.json";
import deserts from "../../data/deserts.json";

export default function HomePage() {
    const categories = [dishes, deserts, drinks];
  return (
    <>
      <Hero />
      <div className="home-category">
        <ComponentList list={categories} ComponentList={CategorySection} />
      </div>
    </>
  );
}
