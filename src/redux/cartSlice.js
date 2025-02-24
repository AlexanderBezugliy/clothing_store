import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: 'cartReducer',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find((item) => item.id === action.payload.id);

            if (!existingItem) {
                state.cartItems.push({
                    ...action.payload,

                    quantity: 1,
                })
            }
            // if (!existingItem) {
            //     const newItem = {
            //         id: action.payload.id,
            //         img: action.payload.img,
            //         title: action.payload.title,
            //         price: action.payload.price,

            //         quantity: 1
            //     };

            //     state.cartItems.push(newItem);
            // }
        },

        removeCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
        },

        increaseQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity += 1
            }
        },

        decreaseQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)

            if (itemIndex >= 0 && state.cartItems[itemIndex].quantity > 1) {
                state.cartItems[itemIndex].quantity -= 1
            } else if (state.cartItems[itemIndex].quantity === 1) { //ЕСЛИ КОЛИЧЕСТВО: 1(УДАЛЯЕМ ИЗ КАРЗИНЫ)
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
            }
        }
    }
})

const { actions, reducer } = cartSlice;

export const {
    addToCart,
    removeCart,
    increaseQuantity,
    decreaseQuantity,

} = actions;

export default reducer;