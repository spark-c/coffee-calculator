import React from 'react';

import VarItem from './VarItem';
import kettle from '../images/chalk_kettle_gray.png';


const VarBar = ({ params, target, onInputUpdate }) => {

    let renderedInputs = null;
    switch (target) {
        case params.standard:
            renderedInputs = [params.brewRatio, params.brewedCoffee];
            break;
        case params.water:
            renderedInputs = [params.brewRatio, params.dryCoffee];
            break;
        case params.dryCoffee:
            renderedInputs = [params.brewRatio, params.water];
            break;
        case params.brewedCoffee:
            renderedInputs = [params.water, params.dryCoffee];
            break;
        case params.brewRatio:
            renderedInputs = [params.water, params.dryCoffee];
            break;
        default:
            renderedInputs = params;
    }

    const tabs = Object.entries(renderedInputs).map(param => {
        return <VarItem param={param[1]} key={param[0]} onInputUpdate={onInputUpdate} drawInput={true} />
    });
        

    return (
        <div className="bar var-bar input-bar">
            <div className="back" style={{backgroundImage: `url(${kettle})`}}>
                {tabs}
            </div>
        </div>
    );
};

export default VarBar;