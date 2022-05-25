import {useState} from "react";

const useToggle = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const toggleValue = (value) => {
        setValue((currentValue => typeof value === "boolean"
            ? value
            : !currentValue))
    }

    return [value, toggleValue]
}

export default useToggle