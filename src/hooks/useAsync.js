import {useCallback, useEffect, useState} from "react";

const useAsync = (callback, dependencies) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [value, setValue] = useState();

    const memoizedCallback = useCallback(() => {
        setLoading(true);
        setError(undefined);
        setValue(undefined);
        callback()
            .then(setValue)
            .catch(setError)
            .finally(() => setLoading(false))
    }, dependencies);

    useEffect(() => {
        memoizedCallback()
    }, [memoizedCallback]);

    return {loading, error, value}
};

export default useAsync;