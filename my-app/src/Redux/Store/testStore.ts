import {configureStore} from "@reduxjs/toolkit";
import testSlice from "../Slices/testSlice";



export const store = configureStore({
    reducer: {
        todo: testSlice
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch