import React from 'react'
import {useStateWithValidation} from "hooks";

const StateWithValidationComponent = () => {
    const [name, setName, isValid] = useStateWithValidation((name) => name.length > 5, "");

    return (
        <>
            <div>Valid: {isValid.toString()}</div>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        </>
    )
}

export default StateWithValidationComponent
