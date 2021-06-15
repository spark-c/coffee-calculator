import React from 'react';
import VarItem from './VarItem';


const VarBar = ({ params, onParamUpdate }) => {

    const tabs = params.map(param => {
        let passedParam = Object.entries(param)[0][1];
        return <VarItem param={passedParam} key={passedParam.label} onParamUpdate={onParamUpdate} />
    })

    return (
        <div className="bar var-bar">
            {tabs}
        </div>
    );
};

export default VarBar;