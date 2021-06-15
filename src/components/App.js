import React, { useState } from 'react';
import VarBar from './VarBar';
import TextBar from './TextBar';
import Calculator from './Calculator';
import './stylesheet.css';


const instructionsContent = 
    "Welcome to Coffee Calculator! " +
    "Enter your known variables and the calculator will present information as it becomes available."

    

const App = () => {
    console.log('rendering app!');
    const [params, setParams] = useState([
        {
            label: "Brew Ratio",
            defaultSelected: true,
            unit: "g/L",
            value: 60
        },
        {
            label: "Water Amount",
            defaultSelected: false,
            unit: "mL",
            value: undefined
        },
        {
            label: "Dry Coffee",
            defaultSelected: false,
            unit: "g",
            value: undefined
        },
        {
            label: "Brewed Coffee",
            defaultSelected: true,
            unit: "mL",
            value: 250
        },
    ]);

    const onParamUpdate = (label, newValue) => {
        let tempParams = params.map(param => {
            return {...param}
        });
        console.log("tempParams", tempParams)
        for (let param of tempParams) {
            console.log(param.label, "vs", label)
            if (param.label == label) {
                console.log("match found")
                param.value = newValue;
            }
        }
        setParams(tempParams);
    };

    return (
        <div className="container">
            <TextBar label="Instructions" content={instructionsContent} />
            <VarBar params={params} onParamUpdate={onParamUpdate} />
            <Calculator params={params} />
        </div>
    );
};

export default App;