import React, { useState } from 'react';
import Selector from './Selector';
import VarBar from './VarBar';
import TextBar from './TextBar';
import Calculator from './Calculator';
import './stylesheet.css';


const instructionsContent = `Welcome to Coffee Calculator! Select the parameter you'd like to calculate, and enter the necessary variables. Values targeted for use in Hario V60 recipes. Don't forget to rinse your filter!`

    

const App = () => {
    const [params, setParams] = useState({
        standard:
            {
                label: "Standard",
                unit: "n/a",
                value: undefined,
            },
        brewRatio:
            {
                label: "Brew Ratio",
                unit: "g/L",
                value: 60
            },
        water:
            {
                label: "Water Amount",
                unit: "mL",
                value: undefined
            },
        dryCoffee:
            {
                label: "Dry Coffee",
                unit: "g",
                value: undefined
            },
        brewedCoffee:
            {
                label: "Brewed Coffee",
                unit: "mL",
                value: 250
            },
        });

        const [targetParam, setTargetParam] = useState(params.standard);


    const onInputUpdate = (label, newValue) => {
        let tempParams = {...params};
        for (let param in tempParams) {
            if (tempParams[param].label == label) {
                tempParams[param].value = newValue;
            }
        }
        setParams(tempParams);
    };

    return (
        <div className="container">
            <TextBar label="Instructions" content={instructionsContent} />

            <h3 className="bar-label">Value to calculate:</h3>
            <Selector options={params} onTargetUpdate={setTargetParam} />
            <div>Selected: {targetParam.label}</div>
            
            <h3 className="bar-label">Required variables:</h3>
            <VarBar
                params={params}
                onInputUpdate={onInputUpdate}
                target={targetParam} />

            <h3 className="bar-label">Result:</h3>
            <Calculator target={targetParam} params={params} />
        </div>
    );
};

export default App;