import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemInCart from "./ItemInCart";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

function Cart() {
  const [activeCart, setActiveCart] = useState(true);
  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[25vw] h-full p-5 bg-white mb-3 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => {
              setActiveCart(!activeCart);
            }}
            className="border-2 border-gray text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>

        {cartItems.map((food) => {
          return (
            <ItemInCart
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
              qty={food.qty}
            />
          );
        })}

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items: </h3>
          <h3 className="font-semibold text-gray-800">Total Amount: </h3>
          <hr className="w-[90vw] lg:w-[22vw]" />
          <button className="bg-green-500 font-bold px-3 text-white rounded-lg py-2 my-1 w-[90vw] lg:w-[22vw] hover:bg-green-600 cursor-pointer mb-5">
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className="rounded-full bg-white hover:bg-gray-200 transition-all duration-200 shadow-md text-5xl p-3 fixed bottom-4 right-4 cursor-pointer"
      />
    </>
  );
}

export default Cart;
