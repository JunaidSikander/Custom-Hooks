import React, {Fragment} from 'react'
import {useArray} from "hooks";

const ArrayComponent = () => {
    const {array, set, push, remove, update, filter, clear} = useArray([1, 2, 3, 4, 5, 6]);

    return (
        <Fragment>
            <div> {array.join(' , ')} </div>
            <button onClick={() => push(7)}>Add 7</button>
            <button onClick={() => update(1, 9)}>Change Second element to 9</button>
            <button onClick={() => remove(1)}>Remove Second Element</button>
            <button onClick={() => filter((n) => n < 4)}>Keep Number Less Than 4</button>
            <button onClick={() => set([1, 2])}>Set to 1,2</button>
            <button onClick={() => clear()}>clear</button>
        </Fragment>
    )
};

export default ArrayComponent;