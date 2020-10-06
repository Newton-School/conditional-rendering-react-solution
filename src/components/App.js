import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {

    const [state, setState] = useState(false); 
    const [styles, setStyles] = useState(false);
    
    const handleStateChange = (e) => {
        e.preventDefault();
        setState(!state);
    }
    const handleStyleChange = (e) => {
        e.preventDefault();
        setStyles(!styles);
    }

    return (
        <div>
            <button id='stateChangeButton' onClick={handleStateChange}>Change State</button>
            &nbsp; &nbsp;
            <button id='styleChangeButton' onClick={handleStyleChange}>Change Style</button>
            <br/>
            <span id='data' className={ (styles) ? 'content' : 'abc' }>
                {
                    (state) ? 
                    (
                        'True'
                    ) : (
                        'False'
                    )
                }
            </span>
        </div>
    )
}


export default App;
