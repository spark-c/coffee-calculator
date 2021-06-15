import React from 'react';

// brewRatio = dry / water
const calcBrewRatio = (dryCoffee, water) => {
    return dryCoffee / water;
};
// water = dry / brewRatio
const calcWater = (dryCoffee, brewRatio) => {
    return dryCoffee / brewRatio;
};
// dry = brewRatio * water
const calcDryCoffee = (brewRatio, water) => {
    return brewRatio * water;
};
// brewedCoffee = water - 2(dry)
const calcBrewedCoffee = (water, dryCoffee) => {
    return (water - 2(dryCoffee));  
};


const Calculator = ({ params }) => {
    const values = params.map(param => {
        return <p key={param.label}>{param.label}: {param.value}</p>;
    });

    return (
        <div className="calculator">
            {values}
        </div>
    );
};

export default Calculator;