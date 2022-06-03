import React, {Fragment, useState} from 'react'
import {useStateWithHistory} from "hooks";

const StateWithHistoryComponent = () => {
    const [count, setCount, {go, back, forward, history, pointer}] = useStateWithHistory(1);
    const [name, setName] = useState('Junaid');
    return (<Fragment>
        <div> {count} </div>
        <div> {history.join(', ')} </div>
        <div> Pointer - {pointer}</div>
        <div> {name}</div>
        <button onClick={() => setCount(currentCount => currentCount * 2)}>Double</button>
        <button onClick={() => setCount(currentCount => currentCount + 1)}>Increment</button>
        <button onClick={back}>Back</button>
        <button onClick={forward}>Forward</button>
        <button onClick={() => go(2)}>Go to index 2</button>
        <button onClick={() => setName('Sikander')}>Change Name</button>
    </Fragment>)
};

export default StateWithHistoryComponent;