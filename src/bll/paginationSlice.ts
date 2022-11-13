import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type PaginationType = {
    page: number
    jobPerPage: number
}

const initialState: PaginationType = {
    page: 1,
    jobPerPage: 5,
}

const slice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<{ pageNumber: number }>) {
            state.page = action.payload.pageNumber
        },
        nextPage(state) {
            state.page += 1
        },
        previousPage(state) {
            state.page -= 1
        }
    }
})

export const paginationSlice = slice.reducer
export const {setCurrentPage, nextPage, previousPage} = slice.actions