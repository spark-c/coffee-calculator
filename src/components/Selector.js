import React from 'react';

import VarItem from './VarItem';
import kettle from '../images/chalk_kettle_gray.png';


const Selector = ({ options, onTargetUpdate }) => {

    const buttons = Object.entries(options).map(option => {
        return <VarItem param={option[1]} onTargetUpdate={onTargetUpdate} drawInput={false} key={option[0]} />
    });

    return (
        <div
            className="selector back"
            style={{backgroundImage: `url(${kettle})`}}>
            <div className="buttons-container">
                {buttons}
            </div>
        </div>
    );
};

export default Selector;