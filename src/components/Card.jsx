import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartSlice";

function Card({ id, name, price, description, img, ratings }) {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[250px] p-5 bg-white flex flex-col rounded-lg gap-2">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500">{price}</span>
      </div>
      <p className="text-sm font-normal">{description.slice(0, 50)}...</p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-yellow-400" /> {ratings}
        </span>
        <button
          onClick={() => {
            dispatch(
              addToCart({
                id,
                name,
                price,
                ratings,
                qty: 1,
                img,
              })
            );
          }}
          className=" text-sm p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
