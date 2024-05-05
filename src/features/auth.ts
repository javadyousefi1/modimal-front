import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkAuth } from "../api/login";

type initialStatetype = { userData: null | Object, loading: boolean, loggedIn: boolean }


const getCurrentUser = createAsyncThunk(
    'userAuth',
    async () => {
        const response = await checkAuth();
        return response?.data?.data;
    }
);

const userLoggedIn = createAsyncThunk('userLogin', async (data:object) => {
    return data;
})

const initialState: initialStatetype = {
    userData: null,
    loading: true,
    loggedIn: false
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCurrentUser.fulfilled, (state, action) => {
            state.userData = action.payload
            state.loading = false
            state.loggedIn = true
        }); 
        builder.addCase(getCurrentUser.pending, (state) => {
            state.userData = null
            state.loading = true
            state.loggedIn = false
        });
        builder.addCase(getCurrentUser.rejected, (state) => {
            state.userData = null
            state.loading = false
            state.loggedIn = false
        });
        builder.addCase(userLoggedIn.fulfilled, (state, action) => {
            state.userData = action.payload
            state.loading = false
            state.loggedIn = true
        });
    },
});

export { getCurrentUser ,userLoggedIn};
export default usersSlice.reducer