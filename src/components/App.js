import React, { useState } from 'react';
import VarBar from './VarBar';
import TextBar from './TextBar';
import './stylesheet.css';


const instructionsContent = 
    "Welcome to Coffee Calculator! " +
    "Enter your known variables and the calculator will present information as it becomes available."

    

const App = () => {
    const [params, setParams] = useState([
        {
            label: "Brew Ratio",
            defaultSelected: true,
            value: 60
        },
        {
            label: "Water Amount",
            defaultSelected: false,
            value: undefined
        },
        {
            label: "Dry Coffee",
            defaultSelected: false,
            value: undefined
        },
        {
            label: "Brewed Coffee",
            defaultSelected: true,
            value: 250
        },
    ]);

    const onParamUpdate = (label, newValue) => {
        console.log(label, newValue);
    };

    return (
        <div className="container">
            <TextBar label="Instructions" content={instructionsContent} />
            <VarBar params={params} onParamUpdate={onParamUpdate} />
        </div>
    );
};

export default App;