import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './CartSlice'
import CategorySlice from './CategorySlice' 

const Store = configureStore({
    reducer : {
        cart: CartSlice,
        category: CategorySlice

    }
})
export default Store