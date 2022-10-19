import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from '../../axios.config';
import { closeModal, showModal } from "../modalSlice";

export const loginUser = createAsyncThunk(
    'login/userLogin', async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(showModal());
            const response = await API.post('/auth/login',{username:data.user,password:data.pwd});
            return response;
        } catch (error) {
            console.log(error);
        } finally {
            thunkAPI.dispatch(closeModal())
        }
    }
)
const initialState = {
    loggedIn: false,
    userName:'mor_2314',
    passWord:'83r5^_',
    token:'',
    isLoading: false,
    name:''

}

const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers: {
        login: (state, action) => {
            state.name = action.payload;

        },
    },
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.isLoading = false;
        },
        [loginUser.fulfilled]: (state, action) => {
            state.token = action.payload.data.token;
            state.loggedIn = true;
        },
        [loginUser.rejected]: (state) => {
            state.isLoading =false;
            state.loggedIn = false;
        }
    }
});

export const {login} = loginSlice.actions;

export default loginSlice.reducer;