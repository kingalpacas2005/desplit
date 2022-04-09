import React, { useState, useEffect } from "react";

import Card from "./Card";

const CarreDas = (props) => {

    const {carte} = props;
    const {led} = props;
    const {couleur} = props;


    var styleCarte = [];
    var classDesCartes = [];

    var i;

    for(i = 0;i<carte.length;i++){
        classDesCartes.push("ecartDas carte"+ couleur + i)

    }

    

    return (
        <div className="sousCarreDas">
            <div className="carreDas">
                {carte.map((value, index) => (
                    <div className={classDesCartes[index]} ><Card valeur={value} led={led} couleur={couleur}/></div>
                ))}
            </div>
        </div>
        
    );
};

export default CarreDas;