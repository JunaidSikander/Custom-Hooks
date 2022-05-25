import React, {Fragment, useState} from 'react'
import {useTimeout} from "hooks";

const TimeoutComponent = () => {
    const [count, setCount] = useState(10);
    const {clear, reset} = useTimeout(() => setCount(0), 1000)
    return (
        <Fragment>
            <h5>Timeout Component</h5>
            <div>{count}</div>
            <button onClick={() => {
                setCount(c => c + 1)
            }}>Increment
            </button>
            <button onClick={clear}>Clear Timeout
            </button>
            <button onClick={reset}>Reset Timeout
            </button>
        </Fragment>
    )
};

export default TimeoutComponent;