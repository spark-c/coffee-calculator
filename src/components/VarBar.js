import React from 'react';
import VarItem from './VarItem';


const VarBar = ({ params, onParamUpdate }) => {
    

    const tabs = params.map(param => {
        return <VarItem label={param.label} defaultSelected={param.defaultSelected} key={param.label} onParamUpdate={onParamUpdate} />
    })

    return (
        <div className="bar var-bar">
            {tabs}
        </div>
    );
};

export default VarBar;