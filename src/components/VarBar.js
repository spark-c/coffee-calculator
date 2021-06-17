import React from 'react';
import VarItem from './VarItem';


const VarBar = ({ params, onInputUpdate }) => {

    const tabs = Object.entries(params).map(param => {
        return <VarItem param={param[1]} key={param[0]} onInputUpdate={onInputUpdate} drawInput={true} />
    });
        

    return (
        <div className="bar var-bar">
            {tabs}
        </div>
    );
};

export default VarBar;