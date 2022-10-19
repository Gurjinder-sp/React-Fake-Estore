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
            state.quantity = 0;
            state.total = 0;
            state.tax = 0;
        },
        addToCart: (state, action) => {
            const {product} = action.payload;

            const itemIsThere = state.cartItems.find(item => item.id === product.id)
            !!itemIsThere || state.cartItems.push(product);

            state.total = state.cartItems.reduce((ack,item) => ack + item.price,0);
              
        },
        calculateTax: (state) => {
            state.tax = Number((state.total * .15).toFixed(2)); 
        },
        calculateTotal: (state) => {
           
            state.total = state.tax + state.total;
        },
        calculateQuantity: (state) => {
            let count = 0;
            state.cartItems.map(item =>  count++);
            state.quantity = count;
        }
    }
});

export const {addToCart, calculateTax, calculateTotal, clearCart, calculateQuantity} = cartSlice.actions;
export default cartSlice.reducer;