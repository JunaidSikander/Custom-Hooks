import { useEffect, useState } from 'react';


const useMutation=( mutationFn, options={ onSuccess :() => {}, onError :() => {} } ) => {
    const [ data, setData ]=useState ( null );
    const [ error, setError ]=useState ( null );
    const [ isLoading, setIsLoading ]=useState ( false );
    
    const mutate=async ( requestData ) => {
        if ( !( mutationFn instanceof Function ) ) {
            throw new Error ( "The mutationFn parameter in the useMutation hook must be a function." )
        }
        setIsLoading ( true );
        
        try {
            const response=await mutationFn ( requestData );
            
            if ( response instanceof Response ) {
                // If it's a Fetch response, parse JSON
                const responseData=await response.json ();
                setData ( responseData );
            } else if ( response.hasOwnProperty ( "isAxiosError" ) ) {
                // If it's an Axios response, set the whole response as data
                setData ( response );
            } else {
                // Handle other response types here if needed
                // Example: setData(response.data);
            }
            
            setError ( null );
            options.onSuccess && options.onSuccess ( response.data );
        } catch ( err ) {
            setError ( err );
            setData ( null );
            options.onError && options.onError ( err );
        }
        
        setIsLoading ( false );
    };
    
    useEffect ( () => {
        return () => {
            // Cleanup when component unmounts
            setData ( null );
            setError ( null );
        };
    }, [] );
    
    return { data, error, isLoading, mutate };
};

export default useMutation;
