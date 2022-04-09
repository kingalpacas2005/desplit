import React from 'react';
import Button from '../components/Button';
import MetaMask from '../components/MetaMask';



const GroupCreate = () => {
  let addresses = [1, 3];

  function addAddress(addr) {
    addresses.push(addr);
    console.log(addresses);
  }

  return (
    <div className="GroupCreate">
      <div className="hautDePage"></div>
      <div className="selectGroup">
        <MetaMask></MetaMask>
        <div className="addGroup">
          <input type="text" placeholder="Enter Adress" classNames="EnterAdressGroup" />
          <button onClick={addAddress()}>Add to group</button>
        </div>

        <div>
          <ul className="listAdd">
            {addresses.map(address => <li>{address}</li>)}
          </ul>
        </div>

        <div>
          <Button text="Create" clas="creatGroupe"></Button>
        </div>


      </div>
    </div >
  );
};


export default GroupCreate;