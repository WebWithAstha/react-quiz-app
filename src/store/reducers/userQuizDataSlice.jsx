import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
    userQuizData: JSON.parse(localStorage.getItem('userQuizData'))||{},
}

const userQuizDataSlice = createSlice({
    name: "userQuizData",
    initialState,
    reducers: {
        load: (state, action) => {
           state.userQuizData = action.payload
        }
    }

})

export default userQuizDataSlice.reducer

export const {load } = userQuizDataSlice.actions