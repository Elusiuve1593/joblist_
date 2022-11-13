import React, {useEffect} from 'react';
import {JobListPage} from "./components/JobListPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AppRootStateType, useAppDispatch} from "./bll/store";
import {fetchJobListThunk} from "./bll/jobSlice";
import {SinglePage} from "./components/SinglePage";
import {useSelector} from "react-redux";
import {RequestStatusType} from "./bll/appSlice";
import CircularProgress from "@mui/material/CircularProgress";
import {ErrorSnackBar} from "./components/ErrorSnackBar";

function App() {
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.appSlice.status)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchJobListThunk())
    }, [dispatch])

    if (status === "loading") {
        return <div className="flex justify-center my-72"><CircularProgress/></div>
    }
    //sdad
    return (
        <div>
            <ErrorSnackBar/>
            <BrowserRouter>
                <Routes>
                    <Route path={"*"} element={<JobListPage/>}/>
                    <Route path={":id"} element={<SinglePage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;