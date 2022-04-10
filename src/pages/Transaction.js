import React from 'react';
import MetaMask from '../components/MetaMask';
import ChooseMoney from '../components/ChooseMoney';

const Transaction = () => {
    return (
        <div className="transactionPage">
            <div className="PositionMetaMask"><MetaMask></MetaMask></div>
            <h2 className="header">DeSplit</h2>
            <div className="borderFormulaire">
                <form className="formulaire ">
                    <div className="elementForm"><label for="group">Select Group</label><br />
                    <select name="group" id="group">
                        <option value="1">Group 1</option>
                        <option value="2">Group 2</option>
                    </select></div>
                    <div className="elementForm"><label for="recipient">recipient</label>
                    <input type="text" name="recipient"></input></div>
                    <div className="elementForm"><label for="Amount">Amount</label>
                    <input type="text" name="Amount"></input></div>
                    <div className="elementForm elementFormCheck"><input type="checkbox" name="checkTransaction"></input><label for="checkTransaction">Immediate settlement on</label></div>
                    <div className="elementForm"><input type="submit" value="Submit"></input></div>
                    <ChooseMoney></ChooseMoney>
                </form>
            </div>
        </div>
    );
};

export default Transaction;