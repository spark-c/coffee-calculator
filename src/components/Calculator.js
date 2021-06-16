import React, { useState } from 'react';

// some calculation references @ https://www.translatorscafe.com/unit-converter/en-US/calculator/coffee-brewing/

// brewRatio = dry / water
const calcBrewRatio = (dryCoffee, water) => {
    return dryCoffee / (water/1000);
};

// // water = dry / brewRatio
const calcWater = (brewRatio, brewedCoffee) => {
    let trueBrewRatio = brewRatio / 1000;
    return brewedCoffee / (1 + (.2*trueBrewRatio - trueBrewRatio - 1.2*trueBrewRatio));
};

// dry = brewRatio * water
const calcDryCoffee = (brewRatio, water) => {
    return brewRatio * (water/1000);
};

// brewedCoffee = water - 2(dry)
const calcBrewedCoffee = (water, dryCoffee) => {
    return ((water/1000) - 2*dryCoffee);  
};


const Calculator = ({ params }) => {
    const [water, dryCoffee, brewedCoffee, brewRatio] = [params.water, params.dryCoffee, params.brewedCoffee, params.brewRatio];

    
    
    const calculatedValues = [
        {"Water": brewRatio&&brewedCoffee? calcWater(brewRatio.value, brewedCoffee.value):null},
        {"Dry Coffee": brewRatio&&water? calcDryCoffee(brewRatio.value, water.value): null},
        {"Brewed Coffee": water&&dryCoffee? calcBrewedCoffee(water.value, dryCoffee.value):null},
        {"Brew Ratio": dryCoffee&&water? calcBrewRatio(dryCoffee.value, water.value):null},
    ];
    
    const renderedValues = calculatedValues.map(param => {
        let [[itemName, itemValue]] = Object.entries(param);
        return itemValue? <p key={itemName}>{itemName}: {itemValue}</p>:null;
    });

    return (
        <div className="calculator bar">
            <div className="results">
                {/* {calculatedValues[0]["water"]} */}
                {renderedValues}
            </div>
            <div className="needed">
                Needed
            </div>
        </div>
    );
};

export default Calculator;