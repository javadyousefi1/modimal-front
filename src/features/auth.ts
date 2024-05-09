import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkAuth } from "../api/login";

interface userObject {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    profile: null;
    address: null;
    joinDate: number;
    isVerify: boolean;
}
type initialStatetype = { userData: null | userObject, loading: boolean, loggedIn: boolean }


const getCurrentUser = createAsyncThunk(
    'userAuth',
    async () => {
        const response = await checkAuth();
        return response?.data?.data;
    }
);

const setUserData = createAsyncThunk('userLogin', async (data: object | null) => {
    return data;
})

const logout = createAsyncThunk('userLogout', async (data) => {
    return data;
})

export const initialState: initialStatetype = {
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
        builder.addCase(setUserData.fulfilled, (state, action) => {
            state.userData = action.payload
            state.loading = false
            state.loggedIn = true
        });
        builder.addCase(logout.fulfilled, (state) => {
            state.userData = null
            state.loading = false
            state.loggedIn = false
        });
    },
});

export { getCurrentUser, setUserData, logout };
export default usersSlice.reducer