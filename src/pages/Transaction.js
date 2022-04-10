import React from 'react';
import MetaMask from '../components/MetaMask';
import ChooseMoney from '../components/ChooseMoney';

<<<<<<< HEAD
const Transaction = () => {
    return (
        <div className="transactionPage">
            <div className="PositionMetaMask"><MetaMask></MetaMask></div>
            <h2 className="header">DeSplit</h2>
            <div className="borderFormulaire">
                <form className="formulaire ">
                    <div className="elementForm"><label for="group" className="groupselect">Select Group</label><br />
                        <select name="group" id="group" className="grupdrop">
                            <option value="1">Group 1</option>
                            <option value="2">Group 2</option>
                        </select>
                    </div>

                    <div className="inputdiv">
                        <div className="recipientdiv">
                            <div className="name"><label for="recipient">Recipient</label></div>
                            <input type="text" name="recipient" className='box'></input>
                        </div>

                        <div className="ammountdiv">
                            <div className="name"><label for="Amount">Ammount</label></div>
                            <input type="text" name="Amount" className="box"></input>
                        </div>
                    </div>
                    
                    
                    <div className="elementForm elementFormCheck checkAndMoney"><input type="checkbox" name="checkTransaction"></input><label for="checkTransaction">Immediate settlement off   </label><ChooseMoney></ChooseMoney></div>
                    <div className="elementForm"><input type="submit" value="Submit" className="Submitform"></input></div>
                    
                </form>
=======
class Transaction extends React.Component {
    getWallet(wallet) {
        console.log("in wallet", wallet);
    }
    render() {

        return (
            <div className="transactionPage" >
                <h2 className="header">DeSplit</h2>
                <div className="borderFormulaire">
                    <form className="formulaire ">
                        <div className="elementForm"><label for="group">Select Group</label><br />
                            <select name="group" id="group">
                                <option value="1">Group 1</option>
                                <option value="2">Group 2</option>
                                <option value="2">Group 3</option>
                            </select></div>
                        <div className="elementForm"><label for="recipient">recipient</label>
                            <input type="text" name="recipient"></input></div>
                        <div className="elementForm"><label for="Amount">Amount</label>
                            <input type="text" name="Amount"></input></div>
                        <div className="elementForm elementFormCheck checkAndMoney"><input type="checkbox" name="checkTransaction"></input><label for="checkTransaction">Immediate settlement off   </label><ChooseMoney></ChooseMoney></div>
                        <div className="elementForm"><input type="submit" value="Submit"></input></div>

                    </form>
                </div>

>>>>>>> df2f59539715cea240e7f71fa774b38b58d2db77
            </div>
        );
    }
};

export default Transaction;