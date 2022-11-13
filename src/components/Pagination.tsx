import {JobListApiType} from "../dal/jobListApi";
import {nextPage, previousPage, setCurrentPage} from "../bll/paginationSlice";
import {useAppDispatch} from "../bll/store";
import React from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/20/solid";


type PaginationPageType = {
    jobList: JobListApiType[]
    page: number
    jobPerPage: number
    firstJobPage: number
    lastJobPage: number
}

export const Pagination = ({
                               jobList,
                               page,
                               jobPerPage,
                               firstJobPage,
                               lastJobPage
                           }: PaginationPageType) => {
    const dispatch = useAppDispatch()

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(jobList.length / jobPerPage); i++) {
        pageNumbers.push(i)
    }

    const onClickPreviousPageHandler = () => {
        dispatch(previousPage())
    }

    const onClickPaginateNumberHandler = (pageNumber: number) => {
        dispatch(setCurrentPage({pageNumber}))
    }
    const onClickNextPageHandler = () => {
        dispatch(nextPage())
    }
    return (
        <div className={"flex justify-center"}>
            <div className="flex justify-center border rounded-2xl w-90 mb-5 mt-5 border-2 pt-0.5">
                <button className="after: h-6 pr-0.5 mt-2.5 border-r-2"
                        disabled={firstJobPage === 0}
                        onClick={onClickPreviousPageHandler}>
                    <svg className="w-14 h-10 -mt-2 text-gray-400">
                        <ChevronLeftIcon/>
                    </svg>
                </button>
                {
                    pageNumbers.map(pageNumber => (
                        <span style={page === pageNumber ? {
                            color: "#5876c5",
                            fontSize: "17.5px",
                            borderBottom: "3px solid #5876c5",
                            fontWeight: "bolder"
                        } : {color: "#70778b"}}
                              key={pageNumber}
                              onClick={() => onClickPaginateNumberHandler(pageNumber)}>
                            <button className="inline-block py-2 px-3.5 font-bold">{pageNumber}
                            </button>
                        </span>
                    ))
                }
                <button className="after: h-6 pl-0.5 mt-2.5 border-l-2"
                        disabled={jobList.length === lastJobPage}
                        onClick={onClickNextPageHandler}>
                    <svg className="w-14 h-10 -mt-2 text-gray-400">
                        <ChevronRightIcon/>
                    </svg>
                </button>
            </div>
        </div>
    )
}