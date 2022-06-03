import React from 'react'
import {useLocalStorage, useSessionStorage} from "hooks/useStorage";

const StorageComponent = () => {
    const [name, setName, removeName] = useSessionStorage('name', 'Junaid');
    const [age, setAge, removeAge] = useLocalStorage('age', 25);

    return (
        <div>
            <div>
                {name} - {age}
            </div>
            <button onClick={() => setName('Sikander')}>Set Name</button>
            <button onClick={() => setAge(22)}>Set Age</button>
            <button onClick={removeName}>Remove Name</button>
            <button onClick={removeAge}>Remove Age</button>
        </div>
    )
};

export default StorageComponent;