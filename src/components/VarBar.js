import React from 'react';
import VarItem from './VarItem';


const VarBar = () => {
    const params = [
        {
            label: "Brew Ratio",
            defaultSelected: true
        },
        {
            label: "Water Amount",
            defaultSelected: false
        },
        {
            label: "Dry Coffee",
            defaultSelected: false
        },
        {
            label: "Brewed Coffee",
            defaultSelected: true
        },
    ]

    const tabs = params.map(param => {
        return <VarItem label={param.label} defaultSelected={param.defaultSelected} key={param.label} />
    })

    return (
        <div className="var-bar">
            {tabs}
        </div>
    );
};

export default VarBar;