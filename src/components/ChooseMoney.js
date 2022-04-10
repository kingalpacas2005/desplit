import React from 'react';

const ChooseMoney = () => {
    return (
        <div>
            <details>
            <summary><div className="button">Choose your currency</div></summary>
            <lu className="someMoney">
                <li className="oneMoney">
                    BitCoin <img src="./../img/BTC.png" className="money"/>
                </li>
                <li className="oneMoney">
                    Etherum <img src="./../img/ETH.png" className="money"/>
                </li>
                <li className="oneMoney">
                    USDT <img src="./../img/USDT.png" className="money"/>
                </li>
            </lu>
            </details>
        </div>
    );
};

export default ChooseMoney;