import React from 'react';
import ChooseMoney from '../components/ChooseMoney';

const Transaction = () => {
    return (
        <div className="transactionPage">
            <div className="header_main">
                <div className="Desplit">DSplit</div>
            </div>
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
                            <div className="name"><label for="Amount">Amount</label></div>
                            <input type="text" name="Amount" className="box"></input>
                        </div>
                    </div>


                    <div className="elementForm elementFormCheck checkAndMoney"><input type="checkbox" name="checkTransaction"></input><label for="checkTransaction">Immediate settlement off   </label>  <div className="espace2"></div>   <ChooseMoney></ChooseMoney></div>
                    <div className="elementForm"><input type="submit" value="Submit" className="Submitform"></input></div>

                </form>
            </div>
        </div>
    );
};

export default Transaction;
