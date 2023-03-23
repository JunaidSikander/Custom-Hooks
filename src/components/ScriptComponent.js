import React from 'react'
import {useScript, useScript2} from "hooks";

const ScriptComponent = () => {
    // using useScript Hook
    /*const {loading, error} = useScript(
        "https://code.jquery.com/jquery-3.6.0.min.js"
    );

    if (loading) return <div>Loading</div>
    if (error) return <div>Error</div>
    return <div>{window.$(window).width()}</div>*/


    // using useScript2 Hook
    const status = useScript2("https://code.jquery.com/jquery-3.6.0.min.js")

    if (status === 'loading') return <div>Loading</div>
    if (status === 'error') return <div>Error</div>
    return <div>{window.$(window).width()}</div>

};

export default ScriptComponent;
