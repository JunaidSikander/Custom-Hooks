import {useLocalStorage, useMediaQuery} from "hooks";
import {useEffect} from "react";

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('useDarkMode');
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const enabled = darkMode ?? prefersDarkMode;

    useEffect(() => {
        document.body.classList.toggle("dark-mode", enabled);
    }, [enabled]);

    return [darkMode, setDarkMode];
};

export default useDarkMode;
