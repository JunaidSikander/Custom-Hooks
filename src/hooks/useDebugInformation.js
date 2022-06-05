import React, {useEffect, useRef} from 'react'
import {useRenderCount} from "hooks";

const useDebugInformation = (componentName, props) => {
    const count = useRenderCount();
    const changedProps = useRef({});
    const previousProps = useRef(props);
    const lastRenderTimestamp = useRef(Date.now());

    const propsKeys = Object.keys({...props, ...previousProps});
    changedProps.current = propsKeys.reduce((obj, key) => {
        if (props[key] === previousProps.current[key]) return obj;
        return {
            ...obj,
            [key]: {previous: previousProps.current[key], current: props[key]}
        }
    }, {});

    const info = {
        count,
        changedProps: changedProps.current,
        timeSinceLastRender: Date.now() - lastRenderTimestamp.current,
        lastRenderTimestamp: lastRenderTimestamp.current
    };

    useEffect(() => {
        previousProps.current = props;
        lastRenderTimestamp.current = Date.now();
        console.log("[DEBUG-INFO]", componentName, info)
    });

    return info;
}

export default useDebugInformation
