import React from 'react'
import {useRenderCount, useToggle} from "hooks";

const RenderCountComponent = () => {
    const [boolean, toggle] = useToggle(false);

    const renderCount = useRenderCount();

    return (
        <>
            <div>{boolean.toString()}</div>
            <div>{renderCount}</div>
            <button onClick={toggle}>Toggle</button>
        </>
    )
}

export default RenderCountComponent
