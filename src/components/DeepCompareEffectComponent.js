import React, {Fragment, useEffect, useRef, useState} from 'react'
import {useDeepCompareEffect} from "hooks";

const DeepCompareEffectComponent = () => {
    const [age, setAge] = useState(0);
    const [otherCount, setOtherCount] = useState(0);

    const useEffectCountRef = useRef();
    const useDeepCompareEffectCountRef = useRef();

    const person = {age: age, name: 'Junaid'}

    useEffect(() => {
        useEffectCountRef.current.textContent =
            parseInt(useEffectCountRef.current.textContent) + 1;
    }, [person]);

    useDeepCompareEffect(() => {
        useDeepCompareEffectCountRef.current.textContent =
            parseInt(useDeepCompareEffectCountRef.current.textContent) + 1
    }, [person]);
    return (
        <Fragment>
            <div>useEffect:
                <span ref={useEffectCountRef}>0</span>
            </div>
            <div>useDeepCompareEffect
                <span ref={useDeepCompareEffectCountRef}>0</span>
            </div>
            <div>Other count: {otherCount}</div>
            <div>{JSON.stringify(person)}</div>
            <button onClick={() => setAge(currAge => currAge + 1)}>Increment Age</button>
            <button onClick={() => setOtherCount(count => count + 1)}>Increment Other Count</button>
        </Fragment>
    )
};

export default DeepCompareEffectComponent;