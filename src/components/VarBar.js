import React from 'react';
import VarItem from './VarItem';


const VarBar = ({ params, onParamUpdate }) => {

    const tabs = Object.entries(params).map(param => {
        return <VarItem param={param[1]} key={param[0]} onParamUpdate={onParamUpdate} />
    });
        

    return (
        <div className="bar var-bar">
            {tabs}
        </div>
    );
};

export default VarBar;