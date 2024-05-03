import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type initialStatetype = { userData: null | any[], loading: boolean, loggedIn: boolean }

function checkAuth() {
    const result = { data: [{ name: "javad" }] }
    return result
}

const getCurrentUser = createAsyncThunk(
    'userAuth',
    async () => {
        const response = await checkAuth();
        return response.data;
    }
);

const initialState: initialStatetype = {
    userData: null,
    loading: false,
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
    },
});

export { getCurrentUser };

export default usersSlice.reducer