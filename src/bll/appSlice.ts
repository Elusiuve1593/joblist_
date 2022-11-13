import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed" | ""

const initialState = {
    status: "" as RequestStatusType,
    error: null as null | string,
}

const slice = createSlice({
    name: "app",
    initialState,
    reducers: {
        changeStatus(state, action: PayloadAction<{ status: RequestStatusType }>) {
            state.status = action.payload.status
        },
        errorMessage(state, action: PayloadAction<{ error: string | null }>) {
            state.error = action.payload.error
        }
    }
})

export const appSlice = slice.reducer
export const {changeStatus, errorMessage} = slice.actions