import React from 'react'
import {useWindowSize} from "hooks";

const WindowSizeComponent = () => {
    const {width, height} = useWindowSize();

    return <>
        {width} x {height}
    </>
}

export default WindowSizeComponent
