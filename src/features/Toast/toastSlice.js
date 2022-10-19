import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    show: false,
    message:''
}

const toastSlice = createSlice({
    name:'toast',
    initialState,
    reducers: {
        showToast: (state, action) => {
            state.message = action.payload;
            state.show = true;
        },
        closeToast: (state) => {
                state.show = false;
        }
    }
});

export const {showToast, closeToast} = toastSlice.actions;
export default toastSlice.reducer;