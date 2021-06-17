import React, { useState } from 'react';
import Selector from './Selector';
import VarBar from './VarBar';
import TextBar from './TextBar';
// import Calculator from './Calculator';
import './stylesheet.css';


const instructionsContent = 
    "Welcome to Coffee Calculator! " +
    "Enter your known variables and the calculator will present information as it becomes available."

    

const App = () => {
    const [params, setParams] = useState({
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

        const [targetParam, setTargetParam] = useState(params.water);


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
            <Selector options={params} onTargetUpdate={setTargetParam} />
            <div>Target: {targetParam.label}</div>
            <VarBar params={params} onInputUpdate={onInputUpdate} />
            {/* <Calculator params={params} /> */}
        </div>
    );
};

export default App;