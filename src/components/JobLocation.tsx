import {GoogleMap, Marker, useJsApiLoader} from "@react-google-maps/api";
import React from "react";
import {MapPinIcon} from "@heroicons/react/20/solid";

type JobLocationType = {
    departmentName: string
    lat: number
    long: number
    address: string
    phone: string
    email: string
}

const API_KEY = "AIzaSyAwGsmp3P-giv1guEraudBb-EoEWnrMcQc"

const containerStyle = {
    width: "300px",
    height: "300px"
}

export const JobLocation = ({
                                departmentName,
                                lat,
                                long,
                                address,
                                phone,
                                email
                            }: JobLocationType) => {
    const center = {
        lat: lat,
        lng: long
    }

    const {isLoaded} = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: API_KEY
    })
    const mapRef = React.useRef<google.maps.Map | null>(null)

    const onLoad = (map: google.maps.Map): void => {
        mapRef.current = map
    }
    const onUnmount = (): void => {
        mapRef.current = null
    }
    if (!isLoaded) return <div>Loading...</div>
    return (
        <div
            className="hidden lg:flex block flex-col absolute top-24 right-4 border w-min rounded bg-[#2A3047]">
            <div className="ml-16 pt-4 pb-1.5 font-bold text-xl text-white">{departmentName}</div>
            <div className="flex ml-14 pb-1.5 text-white font-semibold">
                <MapPinIcon className="w-6 text-blue-400"/>{address}</div>
            <div className="ml-16 pb-1.5 text-white font-semibold">{phone}</div>
            <div className="ml-16 pb-4 text-white font-semibold">{email}</div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                <Marker position={{lat: center.lat, lng: center.lng}}/>
            </GoogleMap>
        </div>
    )
}
