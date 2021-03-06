import React, { useState } from 'react';

// some calculation references @ https://www.translatorscafe.com/unit-converter/en-US/calculator/coffee-brewing/



const Calculator = ({ target, params }) => {
    const [water, dryCoffee, brewedCoffee, brewRatio] = (
        [params.water, params.dryCoffee, params.brewedCoffee, params.brewRatio]
    );
    const [checked, setChecked] = useState(false);
    const message = [{label: "Please provide inputs!", value: null}];


    // BE SURE TO UPDATE VARS IN VARBAR to ensure the correct vars are presented for inputs
    // brewRatio = dry / water
    const calcBrewRatio = () => {
        brewRatio.value = dryCoffee.value / (water.value/1000);
        return [brewRatio];
    };

    const calcWater = () => {
        water.value = 1000 * (1 / (brewRatio.value / dryCoffee.value));
        return [water];
    };

    // water = dry / brewRatio
    const calcWaterFromRatio = () => {
        let trueBrewRatio = brewRatio.value / 1000;
        water.value = brewedCoffee.value / (1 + (.2*trueBrewRatio - trueBrewRatio - 1.2*trueBrewRatio))
        return [water];
    };

    // dry = brewRatio * water
    const calcDryCoffee = () => {
        dryCoffee.value = brewRatio.value * (water.value/1000);
        return [dryCoffee];
    };

    // brewedCoffee = water - 2(dry)
    const calcBrewedCoffee = () => {
        brewedCoffee.value = ((water.value) - 2*dryCoffee.value);
        return [brewedCoffee];  
    };

    // standard
    const calcStandard = () => {
        water.value = calcWaterFromRatio()[0].value;
        dryCoffee.value = calcDryCoffee()[0].value;
        return [water, dryCoffee];
    };


    let renderedValue = null;
    switch (target) {
        case params.standard:
            renderedValue = brewRatio.value&&brewedCoffee.value? calcStandard():message;
            break;
        case params.water:
            renderedValue = brewRatio.value&&dryCoffee.value? calcWater():message;
            break;
        case params.dryCoffee:
            renderedValue = brewRatio.value&&water.value? calcDryCoffee():message;
            break;
        case params.brewedCoffee:
            renderedValue = water.value&&dryCoffee.value? calcBrewedCoffee():message;
            break;
        case params.brewRatio:
            renderedValue = water.value&&dryCoffee.value? calcBrewRatio():message;
            break;
        default:
            renderedValue = "No target match!"
    }

    const getCalculationJsx = (value) => { // if the value is water and "Iced Coffee" is checked, calc water/ice ratio.
        return (
            (value.label === "Water Amount" && checked==true)?
                <label className="result-value">
                    {`Liquid: ${(value.value*.6).toFixed(2)} mL`}<br/>
                    {`Ice: ${(value.value*.4).toFixed(2)} g`}
                </label>:
                <label className="result-value">
                    {`${value.value.toFixed(2) + value.unit}`}
                </label>
        );
    };

    const renderThis = renderedValue.map(value => {
        return (
            value.value? 
            <div className="result" key={value.label}>
                <label className="result-label">
                    {`${value.label}:`}
                </label>
                {getCalculationJsx(value)}
            </div>:
            value.label
        );
    });

    return (
        <div>
            <div className="bar calculator">
                {renderThis}
            </div>
            <label>Iced Coffee?</label>
            <input
                type="checkbox"
                name="iced"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}>
            </input>
        </div>
    );
};

export default Calculator;