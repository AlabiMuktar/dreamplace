"use client"
import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface RegisterState {
    email: string
}

const initialState: RegisterState = {
    email: ""
}

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        }
    }
})

export const {setEmail} = registerSlice.actions;
export default registerSlice.reducer;