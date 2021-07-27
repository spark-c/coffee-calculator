import React, { useState } from 'react';


const VarItem = ({ param, onTargetUpdate, onInputUpdate, drawInput }) => {
    const [value, setValue] = useState(param.value);

    const onInputChange = (newValue) => {
        onInputUpdate(param.label, newValue);
        setValue(newValue);
    };

    const onButtonClick = () => {
        onTargetUpdate(param);
    };

    const inputDiv = drawInput? 
        <div className="input-wrapper">
            <input
                type='number'
                value={value}
                onChange={(e) => onInputChange(e.target.value)} />
            <span className="unit">{param.unit}</span>
        </div> :
        null;

    return (
        <div className="var-item">
            <div className="var-item-label">
                <label>{param.label}</label>
                {
                    drawInput?
                        null:
                        <button onClick={onButtonClick}>{param.label}</button>
                }
            </div>
            {inputDiv}
        </div>
    );
};

export default VarItem;