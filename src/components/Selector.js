import React from 'react';
import VarItem from './VarItem';


const Selector = ({ options, onTargetUpdate }) => {

    const buttons = Object.entries(options).map(option => {
        return <VarItem param={option[1]} onTargetUpdate={onTargetUpdate} drawInput={false} key={option[0]} />
    });

    return (
        <div className="bar var-bar selector">
            {buttons}
        </div>
    );
};

export default Selector;