import React, { useState } from 'react';


const VarItem = ({ label, defaultSelected, onParamUpdate }) => {
    const [value, setValue] = useState(0);
    const [selected, setSelected] = useState(defaultSelected);

    const onValueChange = (newValue) => {
        onParamUpdate(label, newValue)
        setValue(newValue)
    };

    return (
        <div className="var-item">
            <div className="var-item-label">
                <label>{label}</label>
                <button onClick={() => setSelected(!selected)}>{selected? "del":"add"}</button>
            </div>
            {selected? <input type='number' value={value} onChange={(e) => onValueChange(e.target.value)} />:null}
        </div>
    );
};

export default VarItem;