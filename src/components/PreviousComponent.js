import React, {Fragment, useState} from 'react'
import {usePrevious} from "hooks";

const PreviousComponent = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Junaid');
    const previousCount = usePrevious(count);

    return (
        <Fragment>
            <div> {count} - {previousCount} </div>
            <div> {name} </div>
            <button onClick={() => setCount(currentCount => currentCount + 1)}>Increment</button>
            <button onClick={() => setName('Sikander')}>Change Name</button>
        </Fragment>
    )
};

export default PreviousComponent;