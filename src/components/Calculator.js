import React from 'react';

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


const Calculator = ({ params }) => {
    
    
    
    const renderedValues = params.map(param => {
        return <p key={param.label}>{param.label}: {param.value} {param.value? param.unit:null}</p>;
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