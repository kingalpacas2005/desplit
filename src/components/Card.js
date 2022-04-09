import React from 'react';

import TeteCard from "./TeteCard";

const Card = (props) => {

    const {valeur} = props;
    const {led} = props;
    const {couleur} = props;

    const carte = "";

    function convertChiffreCard(n)
    {
        var s = ""; 
        var couleur = "black ";
        if(n>=1 && n<=52)
        {   
            s = Math.trunc((n-1)/13);
            n %= 13;

            if(s==0)
            {
                s = "♥";
                couleur = "red ";
            }else if(s==1){
                s = "♣";
            }else if(s==2){
                s = "♦";
                couleur = "red ";
            }else if(s==3){
                s = "♠";
            }

            if(n == 11){
                n = "J";
            }else if(n == 12){
                n = "Q";
            }else if(n == 0){
                n = "K";
            }else if(n == 1){
                n = "A";
            }

        }else{
            n = "JOCKER";
        }
        return [s,n,couleur];
    }

    var valeurs = convertChiffreCard(valeur);

    var numrows = valeurs[1];

    var uneValeur = Math.trunc((valeurs[1]-1)/3 + 1);

    console.log(uneValeur)

    var classArrangementSigne = "arrangeMentSigne" + uneValeur;

    var classDesCartesLed = "gameCard ";

    if(led){
        classDesCartesLed += couleur;
        valeurs[2] += couleur + "signe";
    }

    return (
        <div className={classDesCartesLed}>
            <div className="hautGauche">
                <div className={valeurs[2]}>{valeurs[1]}</div>  <div className={valeurs[2]}>{valeurs[0]}</div> 
            </div>
            <div className="millieux"> 
                <TeteCard num={valeurs[1]} couleurTete = {valeurs[2]} />
                {Array(numrows).fill(null).map((value, index) => (
                    <div className={classArrangementSigne}><div className={valeurs[2]}>{valeurs[0]}</div></div>
                ))}
                    
            </div>
            <div className="batDroite">
                <div className={valeurs[2]}>{valeurs[1]}</div>  <div className={valeurs[2]}>{valeurs[0]}</div> 
            </div>
        </div>
    );
};

export default Card;