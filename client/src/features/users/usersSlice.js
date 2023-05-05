import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'Dude Lebowski'},
    {id: '1', name: 'Neil Young'},
    {id: '2', name: 'Jakub Wilczek'},
    {id: '3', name: 'Szymon Bączyk'},
    {id: '4', name: 'Dave Gray'},
]


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})

export const selectAllUsers = state => state.users

export default usersSlice.reducer