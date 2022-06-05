import {useState} from "react";
import {useEventListener} from "hooks";

const useHover = (ref) => {
    const [hovered, setHovered] = useState(false);

    useEventListener("mouseover", () => setHovered(true), ref.current);
    useEventListener("mouseout", () => setHovered(false), ref.current);

    return hovered
}

export default useHover
