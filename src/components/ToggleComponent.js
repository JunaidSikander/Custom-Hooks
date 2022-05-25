import React, {Fragment} from 'react'
import {useToggle} from "hooks";

const ToggleComponent = () => {
    const [value, toggleValue] = useToggle(false)
    return (
        <Fragment>
            <h2>Toggle Component</h2>
            <div>{value.toString()}</div>
            <button onClick={() => toggleValue()}>Toggle</button>
            <button onClick={() => toggleValue(true)}>Make True</button>
            <button onClick={() => toggleValue(false)}>Make False</button>
        </Fragment>
    )
};

export default ToggleComponent;