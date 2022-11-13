import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {jobSlice} from "./jobSlice";
import {paginationSlice} from "./paginationSlice";
import {appSlice} from "./appSlice";

const rootReducer = combineReducers({jobSlice, paginationSlice, appSlice})

export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = configureStore({
    reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch