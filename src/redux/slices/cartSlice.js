import { createSlice } from "@reduxjs/toolkit";

const savedCartItems = localStorage.getItem("cartItems");
const initialState = {
    cartItems: savedCartItems ? JSON.parse(savedCartItems) : [],
};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === payload.id);

            if (itemIndex >= 0) {
                // If item already exists in cart, increment its quantity
                state.cartItems[itemIndex].quantity += 1;
            } else {
                // If item is not in cart, add it with quantity 1
                state.cartItems.push({ ...payload, quantity: 1 });
            }

            // Save cart items to local storage
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        deleteFromCart: (state, { payload }) => {
            state.cartItems.splice(payload, 1);

            // Save cart items to local storage
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
    },
});










//  export the action
export const { addToCart, deleteFromCart } = cartSlice.actions;

export const cartItemsNumber = (state) => state.cart.cartItems.length;
export const cartItems = (state) => state.cart.cartItems;

export default cartSlice.reducer;
