import React from 'react'
import {useOnlineStatus} from "hooks";

const OnlineStatusComponent = () => {
    const online = useOnlineStatus();

    return (
        <>
            <div>{online.toString()}</div>
        </>
    )
}

export default OnlineStatusComponent
