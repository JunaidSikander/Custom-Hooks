import React from 'react'
import {useMediaQuery} from "hooks";

const MediaQueryComponent = () => {
    const isLarge = useMediaQuery("(min-width: 510px)")

    return <div>Large: {isLarge.toString()}</div>
}

export default MediaQueryComponent
