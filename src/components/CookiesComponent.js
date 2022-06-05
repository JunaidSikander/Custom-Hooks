import React from 'react'
import {useCookie} from "hooks";

const CookieComponent = () => {
    const [value, update, remove] = useCookie('name', 'Junaid');

    return (
        <>
            <div>{value}</div>
            <button onClick={() => update('Ali')}>Change Name to Ali</button>
            <button onClick={remove}>Delete Name</button>
        </>
    )
}

export default CookieComponent
