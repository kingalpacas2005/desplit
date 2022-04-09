import React from 'react';

const teteCard = (props) => {

    const {num} = props;
    var {couleurTete} = props;

    couleurTete = couleurTete + " teteCard";

    console.log(num)
    if(num == "J"){
        return (<div><img src="./img/valetSVG.svg" className={couleurTete}/></div>);
    }else if(num == "Q"){
        return (<div><img src="./img/reineSVG.svg" className={couleurTete} /></div>);
    }else if(num == "K"){
        return (<div><img src="./img/roiSVG.svg" className={couleurTete}/></div>);
    }else{
        return (
            <div>
                
            </div>
        );
    }
};

export default teteCard;