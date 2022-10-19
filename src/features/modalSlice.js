import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isShown : false,
}

const modalSlice = createSlice({
    name:'modal',
    initialState,
    reducers: {
        showModal: (state) => {
            state.isShown = true;
        },
        closeModal: (state) => {
            state.isShown = false;
        }
    }
});

export const {showModal, closeModal} = modalSlice.actions;
export default modalSlice.reducer;