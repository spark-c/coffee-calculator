import React from 'react';


const TextBar = ({ label, content }) => {

    return (
        <div className="bar">
            <h3>{label}</h3>
            {content}
        </div>
    );
};

export default TextBar;