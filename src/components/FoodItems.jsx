import React from "react";
import Card from "./Card";
import FoodData from "../Data/Food";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

function FoodItems() {
  const category = useSelector((state) => state.category.category);
  const handleToast = (name) => toast.success(`Added ${name}`);
  const search = useSelector((state) => state.search.search);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-row gap-10 flex-wrap justify-center lg:justify-start mx-6 my-10">
        {FoodData.filter((food) => {
          if (category === "All")
            return food.name.toLowerCase().includes(search.toLowerCase());
          else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => (
          <Card
            key={food.id}
            img={food.img}
            id={food.id}
            name={food.name}
            price={food.price}
            description={food.desc}
            ratings={food.rating}
            className="p-5"
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
}

export default FoodItems;
