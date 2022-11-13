import {Link} from "react-router-dom";
import {JobListApiType} from "../dal/jobListApi";
import React from "react";
import {Pagination} from "./Pagination";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../bll/store";
import moment from "moment";
import {MapPinIcon, StarIcon} from "@heroicons/react/20/solid";
import {BookmarkIcon} from "@heroicons/react/24/outline";

export const JobListPage = () => {
    const jobList = useSelector<AppRootStateType, JobListApiType[]>(state => state.jobSlice)
    const page = useSelector<AppRootStateType, number>(state => state.paginationSlice.page)
    const jobPerPage = useSelector<AppRootStateType, number>(state => state.paginationSlice.jobPerPage)

    const lastJobPage = page * jobPerPage
    const firstJobPage = lastJobPage - jobPerPage
    const currentPage = jobList.slice(firstJobPage, lastJobPage)
    return (
        <div>
            {currentPage.map(page => {
                const createdAt = moment(page.createdAt)
                const updatedAt = moment(page.updatedAt)
                const postCreated = createdAt.from(updatedAt)
                return (
                    <div key={page.id}
                         className="h-full lg:h-36 border rounded-xl ml-4 mr-4 mb-2 mt-2 pl-2 pb-1 pt-1">
                        <div>
                            <img
                                className="min-w-min rounded-full object-cover lg:rounded-full w-20 h-20 object-cover mt-4 ml-2"
                                alt="job"
                                src={page.pictures.find(e => e)}/></div>

                        <div className="flex lg:flex justify-between mt-2.5">
                            <div className="ml-32 -mt-24 pb-4">
                                <Link to={`/${page.id}`}>
                                    <div
                                        className="flex text-gray-600 font-bold text-lg p-1">{page.title}</div>
                                </Link>
                                <div>
                            <span className="text-gray-400 p-1">{page.name}
                                <span className="font-bold ml-2 mr-2">&#183;</span>
                            </span>
                                    <span className="text-gray-400 inline-block pb-2">{page.address}</span>
                                </div>
                                <div>
                                    <span className="inline-block text-gray-400 w-6 pr-1"><MapPinIcon/></span>
                                    <span className="text-gray-400">Vienna, Austria</span>
                                </div>
                            </div>
                            <div>

                                <div className="hidden lg:block w-6 -mt-24 ml-64 pb-4 text-gray-600"><BookmarkIcon/>
                                </div>
                                <div
                                    className="hidden flex place-content-start lg:flex place-content-end w-full h-fit text-gray-600 pr-7 pb-6">
                                    <div className="w-5"><StarIcon/></div>
                                    <div className="w-5"><StarIcon/></div>
                                    <div className="w-5"><StarIcon/></div>
                                    <div className="w-5"><StarIcon/></div>
                                    <div className="w-5"><StarIcon/></div>
                                </div>
                                <div className="hidden lg:block text-gray-400 mr-7 ml-40">Posted {postCreated}</div>
                            </div>

                        </div>
                    </div>
                )
            })}
            <Pagination
                jobList={jobList}
                page={page}
                jobPerPage={jobPerPage}
                firstJobPage={firstJobPage}
                lastJobPage={lastJobPage}
            />
        </div>
    )
}