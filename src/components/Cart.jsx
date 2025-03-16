import React from "react";
import { IoMdClose } from "react-icons/io";
import ItemInCart from "./ItemInCart";

function Cart() {
  return (
    <div className="fixed right-0 top-0 w-full lg:w-[20vw] bg-white p-5 h-full">
      <div className="flex justify-between items-center my-3">
        <span className="text-xl font-bold text-gray-800">My Order</span>
        <IoMdClose className="border-2 border-gray text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300" />
      </div>

      <ItemInCart />

      <div className="absolute bottom-0">
        <h3 className="font-semibold text-gray-800">Items: </h3>
        <h3 className="font-semibold text-gray-800">Total Amount: </h3>
        <hr className="w-[90vw] lg:w-[18vw]" />
        <button className="bg-green-500 font-bold px-3 text-white rounded-lg py-2 my-1 w-[90vw] lg:w-[18vw] hover:bg-green-600 cursor-pointer mb-5">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
