import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {jobListApi, JobListApiType} from "../dal/jobListApi";
import {changeStatus, errorMessage} from "./appSlice";

const initialState: JobListApiType[] = []

export const fetchJobListThunk = createAsyncThunk("job/fetchJobList", async (arq, thunkAPI) => {
    thunkAPI.dispatch(changeStatus({status: "loading"}))
    try {
        const res = await jobListApi.getJobList()
        thunkAPI.dispatch(fetchJobList({jobList: res.data}))
    } catch (err) {
        thunkAPI.dispatch(errorMessage({error: (err as Error).message}))
    }
    finally {
        thunkAPI.dispatch(changeStatus({status: "idle"}))
    }
})

const slice = createSlice({
    name: "job",
    initialState,
    reducers: {
        fetchJobList(state, action: PayloadAction<{ jobList: JobListApiType[] }>) {
            return action.payload.jobList.map(e => {
                return {...e}
            })
        }
    }
})

export const jobSlice = slice.reducer
export const {fetchJobList} = slice.actions