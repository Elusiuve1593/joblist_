import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../bll/store";
import {JobListApiType} from "../dal/jobListApi";
import React from "react";
import {JobLocation} from "./JobLocation";
import {ChevronLeftIcon, ShareIcon} from "@heroicons/react/20/solid";
import team from "../common/team.jpg"
import team1 from "../common/team1.jpg"
import team2 from "../common/team2.jpg"
import moment from "moment/moment";
import {BookmarkIcon} from "@heroicons/react/24/outline";


export const SinglePage = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const jobList = useSelector<AppRootStateType, JobListApiType[]>(state => state.jobSlice)

    const onClickHandler = () => {
        return navigate("*")
    }
    const job = jobList.find(j => j.id === id)

    const eType0 = job && job.employment_type[0]
    const eType1 = job && job.employment_type[1]

    const benefits0 = job && job.benefits[0]
    const benefits1 = job && job.benefits[1]

    const createdAt = moment(job && job.createdAt)
    const updatedAt = moment(job && job.updatedAt)
    const postCreated = createdAt.from(updatedAt)
    return (
        <div>
            {job &&
                <div>
                    <div>
                        <JobLocation
                            lat={job.location.lat}
                            long={job.location.long}
                            departmentName={job.name}
                            address={job.address}
                            phone={job.phone}
                            email={job.email}
                        />
                    </div>
                    <div>
                        <div className="ml-36 flex justify-between border-b w-3/5 pb-2 pt-20">
                            <div className="pt-1 text-blue-900 font-bold text-3xl">Job Details</div>
                            <div className="ml-64 mt-3">
                                <div className="lg:text-blue-900 inline-block w-6 text-gray-600 mr-2 -mb-1.5">
                                    <BookmarkIcon/></div>
                                <span className="inline-block text-blue-900 font-normal">Save to my list </span>
                                <div className="lg:text-blue-900 inline-block w-6 ml-4 -mb-1.5 mr-2"><ShareIcon/>
                                </div>
                                <span className="text-blue-900 font-normal">Share</span>
                            </div>
                        </div>
                        <div
                            className="ml-36 mt-10 inline-block text-blue-900 font-bold text-2xl w-2/4 inline-block">{job.title}
                        </div>
                        <div className="flex-col pb-5">
                            <div className="hidden lg:flex justify-end mr-96 -mt-16 text-blue-900 font-bold text-2xl">
                                &#8364; {job.salary}</div>
                            <div className="hidden lg:flex justify-end mr-96 text-blue-900 font-normal">Brutto, per year</div>
                        </div>
                    </div>

                    <div className="ml-36 mb-4 text-gray-400 font-normal">Posted {postCreated}</div>
                    <div>
                        <div className="ml-36 text-blue-900 font-normal"><p>At Apple, we all share common goals. That is
                            what makes us so successful - and such
                            an <br/> integral part of communities. We want the same things, for our organization, for
                            our patients, <br/> and for aur colleagues. As the most integrated healthcare provided in
                            Georgia, this means we <br/> pride ourselves on investing in the communities that we serve.
                            We continue to provide innovative<br/> care models, focused on improving quality and access
                            to healthcare.
                        </p></div>
                        <span
                            className="ml-36 mb-4 text-xs mt-10 inline-block text-blue-900 font-bold text-2xl">Responsibilities</span>
                        <div className="ml-36 text-left w-3/5 text-blue-900 font-normal"><p>{job.description}</p></div>
                    </div>

                    <div className="mb-10">
                        <span className="ml-36 mb-4 text-xs mt-10 inline-block text-blue-900 font-bold text-2xl ">Compensation & Benefits</span>
                        <ul className="ml-36 text-blue-900 font-normal">Our physicians enjoy a wide range of benefits,
                            including:
                            <li>&#9726; Very competitive compensation package with bonuses</li>
                            <li>&#9726; Medical, Dental, and Vision Insurance</li>
                            <li>&#9726; Occurrence-based Malpractice Coverage</li>
                            <li>&#9726; Short term and Long-term Disability Insurance and life insurance</li>
                        </ul>
                    </div>

                    <button
                        className="ml-36 border p-4 font-semibold w-44 rounded-xl text-white bg-blue-900 uppercase">
                        Apply now
                    </button>
                    <div>
                        <span className="ml-36 m-10 inline-block text-blue-900 font-bold text-2xl border-b w-2/5  pb-2">Additional info</span>
                        <div className="ml-36 -mt-5 pb-3 text-blue-900 text-xl font-bold">Employment type</div>
                        <div className="flex">
                            <div
                                className="ml-36 p-3 rounded-xl border bg-blue-100 text-blue-900 border-y-2 w-56 text-center text-xl font-semibold">
                                {eType0}
                            </div>
                            {eType1 ?
                                <div
                                    className="ml-5 p-3 rounded-xl border bg-blue-100 text-blue-900 border-b-2 w-56 text-center text-xl font-semibold ">{eType1}</div> :
                                <div>{eType1}</div>}
                        </div>

                        <div className="ml-36 mt-5 pb-3 text-blue-900 text-xl font-bold">Benefits</div>
                        <div className="flex">
                            <div
                                className="ml-36 p-3 rounded-xl border bg-yellow-100 text-yellow-700 border-y-2 w-56 text-center text-xl font-semibold">
                                {benefits0}
                            </div>
                            {benefits1 ?
                                <div
                                    className="ml-5 p-3 rounded-xl border bg-yellow-100 border-y-2 text-yellow-700 w-56 text-center text-xl font-semibold ">{benefits1}</div> :
                                <div>{benefits1}</div>}
                        </div>
                    </div>
                </div>
            }
            <div>
                <span className="lg:ml-36 m-10 inline-block text-blue-900 font-bold text-2xl border-b w-3/5 pb-2">Attached images</span>
                <div className="lg:flex ml-36">
                    <img className="w-fit mb-1.5 lg:w-64 mr-2 rounded-2xl" src={team} alt={team}/>
                    <img className="w-fit mb-1.5 lg:w-64 mr-2 rounded-2xl" src={team1} alt={team1}/>
                    <img className="w-fit mb-1.5 lg:w-64 rounded-2xl" src={team2} alt={team2}/>
                </div>
            </div>
            <span className="block border rounded-2xl m-16 ml-20 w-60 bg-gray-200" onClick={onClickHandler}>
                <span className="text-gray-400 inline-block mt-1 ">
                    <ChevronLeftIcon className="text-xs w-11 h-10 mb-1.5 inline-block text-blue-900"/>
                    <button className="text-blue-900 font-semibold uppercase">Return to job board</button>
                </span>
            </span>
        </div>
    )
}