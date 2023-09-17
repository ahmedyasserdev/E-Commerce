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
                state.cartItems[itemIndex].quantity += 1;
            } else {
                state.cartItems.push({ ...payload, quantity: 1 });
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        deleteFromCart: (state, { payload }) => {
            state.cartItems.splice(payload, 1);

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        clearCart: (state) => {
            state.cartItems = []
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

        }
    },
});










//  export the action
export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;

export const cartItemsNumber = (state) => state.cart.cartItems.length;
export const cartItems = (state) => state.cart.cartItems;
export default cartSlice.reducer;
