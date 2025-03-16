import React from "react";
import Navbar from "../components/navbar";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";

function Home() {
  return (
    <div>
      <Navbar />
      <CategoryMenu />
      <FoodItems />
    </div>
  );
}

export default Home;
