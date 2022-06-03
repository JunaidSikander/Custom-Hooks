import React, {Fragment} from 'react'
import {useAsync} from "hooks";

const AsyncComponent = () => {
    const {loading, error, value} = useAsync(() => {
        return new Promise(((resolve, reject) => {
            const success = true;

            setTimeout(() => {
                success ? resolve('Hi') : reject('Error')
            }, 1000)
        }))
    }, [])

    return (<Fragment>
        <div> Loading: {loading.toString()} </div>
        <div> {error} </div>
        <div> {value} </div>
    </Fragment>)
};

export default AsyncComponent;