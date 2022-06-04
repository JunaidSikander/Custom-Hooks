import {useEffect, useState} from "react";


const useGeoLocation = (options) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [data, setData] = useState({});

    useEffect(() => {
        const successHandler = (e) => {
            setLoading(false);
            setError(null);
            setData(e.coords);
        }

        const errorHandler = (e) => {
            setError(e);
            setLoading(false);
        }

        navigator.geolocation.getCurrentPosition(successHandler, errorHandler, options);

        const id = navigator.geolocation.watchPosition(successHandler, errorHandler, options);

        return () => navigator.geolocation.clearWatch(id);
    }, [options]);

    return {loading, data, error}
}

export default useGeoLocation
