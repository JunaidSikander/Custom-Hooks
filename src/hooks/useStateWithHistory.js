import {useCallback, useRef, useState} from "react";

const useStateWithHistory = (defaultValue, {capacity = 10} = {}) => {
    const [value, setValue] = useState(defaultValue);
    const historyRef = useRef([value]);
    const pointerRef = useRef(0);

    const set = useCallback(
        v => {
            const resolvedValue = typeof v === 'function' ? v(value) : v;

            if (historyRef.current[pointerRef.current] !== resolvedValue) {
                /*Delete All the state which are no longer need*/
                if (pointerRef.current < historyRef.current.length - 1) {
                    historyRef.current.splice(pointerRef.current + 1);
                }

                historyRef.current.push(resolvedValue);

                /*Check if beyond the capacity then from the value at the first position*/
                while (historyRef.current.length > capacity) {
                    historyRef.current.shift();
                }
                /*resetting pointer index  to point the correct index*/
                pointerRef.current = historyRef.current.length - 1;
            }
            setValue(resolvedValue)
        }, [capacity, value]
    )

    const back = useCallback(() => {
        if (pointerRef.current <= 0) return;
        pointerRef.current--;
        setValue(historyRef.current[pointerRef.current])
    }, []);

    const forward = useCallback(() => {
        if (pointerRef.current >= historyRef.current.length - 1) return;
        pointerRef.current++;
        setValue(historyRef.current[pointerRef.current]);
    }, []);

    const go = useCallback(index => {
        if (index < 0 || index >= historyRef.current.length - 1) return;
        pointerRef.current = index;
        setValue(historyRef.current[pointerRef.current])
    }, []);

    return [
        value,
        set,
        {
            go,
            back,
            forward,
            history: historyRef.current,
            pointer: pointerRef.current,
        }
    ]
};

export default useStateWithHistory;