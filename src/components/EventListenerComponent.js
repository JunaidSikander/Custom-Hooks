import React, {useState} from 'react'
import {useEventListener} from "../hooks";

const EventListenerComponent = () => {
    const [key, setKey] = useState("");

    useEventListener('keydown', (e) => setKey(e.key))

    return <>
        Last Key: {key}
    </>
}

export default EventListenerComponent
