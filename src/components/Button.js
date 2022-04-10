import React from 'react';

const Button = (props) => {
    const { text } = props;
    const { clas } = props;

    var testClass = clas + " button";

    return (
        <div className={testClass}>
            <div className="inButton">
                
            {text}
            </div>
        </div>
    );
};

export default Button;