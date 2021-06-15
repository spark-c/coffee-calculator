import React from 'react';


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