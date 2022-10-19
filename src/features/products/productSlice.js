import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../axios.config';

export const getAllProducts = createAsyncThunk(
    'products/getAllProducts', async () => {
        try {
            const response = await API.get('/products');
            // console.log(response);
            return response.data;
        } catch (error) {
            // console.log(error);
        }
    }
)
const initialState = {
    products: [],
    isLoading: true,
    originalList:[]
}

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers: {
        filterProducts: (state, action) => {
            // console.log(action.payload);
            state.products = state.originalList;
            if(action.payload === 'all') return;
            let d = state.products.filter((prod) => prod.category === action.payload);
            state.products = d;
        }

    },
    extraReducers: {
        [getAllProducts.pending] : (state) => {
            state.isLoading = true;
        },
        [getAllProducts.fulfilled] : (state, action) => {
            // console.log(action.payload)
            state.isLoading = false;
            state.products = action.payload;
            state.originalList = action.payload;
        },
        [getAllProducts.rejected] : (state) => {

        }
    }
})

export const {filterProducts} = productSlice.actions;

export default productSlice.reducer;