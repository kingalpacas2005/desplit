import React from 'react';
import { useParams } from "react-router-dom";
import ChooseMoney from '../components/ChooseMoney';


const Group = () => {
    let { id } = useParams();
    return (
        < div >
            <p className="fhg" > Group: {id} </p>
            <div className="header_main">
                <div className="Desplit">DSplit</div>
            </div>

            <div className="bodygroup" >

                <div className="firstheadergroup" >

                    <div className="addressesgroup">
                        <h2>Balances</h2>
                        <div className="a1" >
                            <div className="left" >
                                <p className="address" > 0xd35781d9712436ad6dcad30a51e408d4232781ef7296d9a8d53f4c7203744809 </p>
                                <div className="slash" > Owes </div> <p className="value" > 10029 $ </p> </div>
                        </div>
                        <div className="a1" >
                            <div className="left" >
                                <p className="address" > 0xd35781d9712436ad6dcad30a51e408d4232781ef7296d9a8d53f4c7203744809 </p>
                                <div className="slash" > Owes </div> <p className="value" > 559 $ </p> </div>
                        </div>

                    </div>
                    <br />
                    <div className="addressesgroup" >
                        <h2>Transactions</h2>
                        <div className="a1" >
                            <div className="left" >
                                <p className="address" > 0xd35781d9712436ad6dcad30a51e408d4232781ef7296d9a8d53f4c7203744809 </p> <div className="slash" > - </div>
                                <p className="value" > 55,3 $ </p> </div>

                            <div className="right" >
                                <p className="accept" > Accept </p> <p className="slash" >
                                </p> <p className="reject" > Reject </p> </div> </div>
                        <div className="a1" >
                            <div className="left" >
                                <p className="address" > 0xd35781d9712436ad6dcad30a51e408d4232781ef7296d9a8d53f4c7203744809 </p>
                                <div className="slash" > - </div> <p className="value" > 10 000, 29 $ </p> </div>

                            <div className="right" >
                                <p className="accept" > Accept </p> <p className="slash" > | </p> <p className="reject" > Reject </p> </div> </div> <div className="a1" >
                            <div className="left" >
                                <p className="address" > 0xd35781d9712436ad6dcad30a51e408d4232781ef7296d9a8d53f4c7203744809 </p>
                                <div className="slash" > - </div> <p className="value" > 203, 01 $ </p> </div>

                            <div className="right" >
                                <p className="accept" > Paid </p>
                            </div>
                        </div>
                    </div>






                    <h2>Add a new transaction</h2>

                    <form className="formulaire ">
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


                        <div className="elementForm elementFormCheck checkAndMoney"><input type="checkbox" name="checkTransaction"></input><label for="checkTransaction">Immediate settlement off   </label>  <div className="espace2"></div><ChooseMoney></ChooseMoney></div>
                        <div className="elementForm"><input type="submit" value="Submit" className="Submitform"></input></div>

                    </form>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                </div>
            </div >
        </div>
    );
}

export default Group;