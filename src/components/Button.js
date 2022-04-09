import React from 'react';

const Button = (props) => {
    const {text} = props;
    const {clas} = props;

    var testClass = clas + " buton";

    return (
        <div className={testClass}>
            {text}
        </div>
    );
};

export default Button;