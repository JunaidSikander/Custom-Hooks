import React from 'react'
import {useGeoLocation} from "hooks";

const GeoLocationComponent = () => {
    const {loading, error, data: {latitude, longitude}} = useGeoLocation();

    return (
        <>
            <div>Loading: {loading.toString()}</div>
            <div>Error: {error?.message}</div>
            <div> {latitude} x {longitude} </div>
        </>
    )
}

export default GeoLocationComponent
