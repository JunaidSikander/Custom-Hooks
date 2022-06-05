import React from 'react'
import {useCopyToClipboard} from "hooks";

const CopyToClipboard = () => {
    const [copyToClipBoard, {success}] = useCopyToClipboard();

    return (
        <>
            <button onClick={() => copyToClipBoard('This was copied')}>
                {success ? 'Copied' : 'Copy'}
            </button>
            <input type='text'/>
        </>
    )
}

export default CopyToClipboard
