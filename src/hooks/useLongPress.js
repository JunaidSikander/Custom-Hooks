import {useEffectOnce, useEventListener, useTimeout} from "hooks";

const useLongPress = (ref, cb, {delay = 250} = {}) => {
    const {clear, reset} = useTimeout(cb, delay);
    useEffectOnce(clear);

    useEventListener("mousedown", reset, ref.current);
    useEventListener("touchstart", reset, ref.current);
    useEventListener("mouseup", clear, ref.current);
    useEventListener("mouseleave", clear, ref.current);
    useEventListener("touchend", clear, ref.current);
}

export default useLongPress
