import React from 'react';


const TextBar = ({ label, content }) => {

    return (
        <div className="bar">
            <h3>{label}</h3>
            <p>{content}</p>
        </div>
    );
};

export default TextBar;