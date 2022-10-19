import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems:[],
    quantity:0,
    total:0,
    tax:0,

}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        addToCart: (state, action) => {
            const {product} = action.payload;

            const itemIsThere = state.cartItems.find(item => item.id === product.id)
            !!itemIsThere || state.cartItems.push(product);

            state.total = state.cartItems.reduce((ack,item) => ack + item.price,0);
              
        },
        calculateTax: (state) => {
            state.tax = state.total * .15; 
        },
        calculateTotal: (state) => {
           
            state.total = state.tax + state.total;
        }
    }
});

export const {addToCart, calculateTax, calculateTotal, clearCart} = cartSlice.actions;
export default cartSlice.reducer;