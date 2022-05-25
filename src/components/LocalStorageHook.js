import React from 'react'
import {useLocalStorage} from "hooks";

const LocalStorageHook = () => {
    const [name, setName] = useLocalStorage('name', '');
    return (
        <input type="text"
               value={name}
               onChange={e => setName(e.target.value)}
        />
    )
};

export default LocalStorageHook;