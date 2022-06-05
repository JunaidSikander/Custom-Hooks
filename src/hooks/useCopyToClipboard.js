import {useState} from "react";
import copy from 'copy-to-clipboard'

const useCopyToClipboard = () => {
    const [value, setValue] = useState();
    const [success, setSuccess] = useState();

    const copyToClipboard = (text, options) => {
        const result = copy(text, options);
        if (result) setValue(result);
        setSuccess(result);
    }

    return [copyToClipboard, {value, success}];
}

export default useCopyToClipboard
