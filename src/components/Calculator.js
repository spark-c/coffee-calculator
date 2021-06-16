import React from 'react';

// some calculation references @ https://www.translatorscafe.com/unit-converter/en-US/calculator/coffee-brewing/

// brewRatio = dry / water
const calcBrewRatio = (dryCoffee, water) => {
    return dryCoffee / (water/1000);
};
// water = dry / brewRatio
const calcWater = (dryCoffee, brewRatio) => {
    return dryCoffee / brewRatio;
};
// dry = brewRatio * water
const calcDryCoffee = (brewRatio, water) => {
    return brewRatio * (water/1000);
};
// brewedCoffee = water - 2(dry)
const calcBrewedCoffee = (water, dryCoffee) => {
    return ((water/1000) - 2(dryCoffee));  
};


const Calculator = ({ brewRatio, water, dryCoffee, brewedCoffee }) => {
    
    const calculatedValues = [
        {brewRatio: dryCoffee&&water? calcBrewRatio(dryCoffee.value, water.value):1},
        {water: dryCoffee&&brewRatio? calcWater(dryCoffee.value,brewRatio.value):1},
        {dryCoffee: brewRatio&&water? calcDryCoffee(brewRatio.value, water.value): 1},
        {brewedCoffee: water&&dryCoffee? calcBrewedCoffee(water.value, dryCoffee.value):1}
    ];
    
    const renderedValues = calculatedValues.map(param => {
        let thing = Object.entries(param);
        console.log(thing);
        return thing[0]? <p key={thing}>{thing}: {thing} {thing}</p>:null;
    });

    return (
        <div className="calculator bar">
            <div className="results">
                {renderedValues}
            </div>
            <div className="needed">
                Needed
            </div>
        </div>
    );
};

export default Calculator;