import {useCallback, useState} from 'react'

const useStateWithValidation = (validationFunc, initialValue) => {
    const [state, setState] = useState(initialValue);
    const [isValid, setIsValid] = useState(validationFunc(initialValue));

    const onChange = useCallback((nextState) => {
        const value = typeof nextState === 'function' ? nextState(state) : nextState;
        setState(value);
        setIsValid(validationFunc(value))
    }, [validationFunc])

    return [state, onChange, isValid];
}

export default useStateWithValidation
