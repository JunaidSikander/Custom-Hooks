import React, {Fragment, useState} from 'react'
import {useDebounce} from "hooks";

const DebounceComponent = () => {
    const [count, setCount] = useState(0);
    useDebounce(() => alert(count), 1000, [count]);

    return (
        <Fragment>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </Fragment>
    )
};

export default DebounceComponent;