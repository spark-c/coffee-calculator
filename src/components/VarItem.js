import React, { useState } from 'react';


const VarItem = ({ label, defaultSelected }) => {
    const [value, setValue] = useState(0);
    const [selected, setSelected] = useState(defaultSelected);

    return (
        <div className="var-item">
            <div className="var-item-label">
                <label>{label}</label>
                <button onClick={() => setSelected(!selected)}>{selected? "del":"add"}</button>
            </div>
            {selected? <input type='number' value={value} onChange={(e) => setValue(e.target.value)} />:null}
        </div>
    );
};

export default VarItem;