import { configureStore } from "@reduxjs/toolkit";

import userQuizDataSlice from "./reducers/userQuizDataSlice.jsx";

export const store = configureStore({
    reducer:{ userQuizDataSlice }
})