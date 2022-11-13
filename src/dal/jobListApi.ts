import axios from "axios"

const token = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"

const instance = axios.create({
    baseURL: "https://api.json-generator.com/templates/ZM1r0eic3XEy/",
    headers: {"Authorization": `Bearer ${token}`}
})

export const jobListApi = {
    getJobList() {
        return instance.get<JobListApiType[]>("data")
    }
}

export type JobListApiType = {
    id: string
    name: string
    email: string
    phone: string
    title: string
    salary: string
    address: string
    benefits: string[]
    location: {
        lat: number
        long: number
    }
    pictures: string[]
    createdAt: string
    updatedAt: string
    description: string
    employment_type: string[]
}