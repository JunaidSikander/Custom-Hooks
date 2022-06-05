import React, {useState} from 'react'
import {useEffectOnce} from "hooks";

const EffectOnceComponent = () => {
    const [counter, setCounter] = useState(0);

    useEffectOnce(() => alert('Called Once'));

    return (
        <>
            <div>{counter}</div>
            <button onClick={() => setCounter(c => c + 1)}>Increment</button>
        </>
    )
}

export default EffectOnceComponent
