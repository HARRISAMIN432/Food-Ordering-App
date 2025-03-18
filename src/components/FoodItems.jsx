import React from "react";
import Card from "./Card";
import FoodData from "../Data/Food";
import toast, { Toaster } from "react-hot-toast";

function FoodItems() {
  const handleToast = (name) => toast.success(`Added ${name}`);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-row gap-10 flex-wrap justify-center lg:justify-start mx-6 my-10">
        {FoodData.map((food) => {
          return (
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
          );
        })}
      </div>
    </>
  );
}

export default FoodItems;
