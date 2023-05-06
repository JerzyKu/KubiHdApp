import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

const initialState = {
    users: [],
    status: 'idle', // ildle, loading, succeeded, failed
    error: null
}

export const fetchUsers = createAsyncThunk('users/fechUsers', async () => {
    const response = await axios.get(USERS_URL)
    return response.data
})


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },
    extraReducers(builder){
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded'
                return action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const selectAllUsers = state => state.users

export default usersSlice.reducer