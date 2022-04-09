import React from 'react';
import Button from '../components/Button';
import MetaMask from '../components/MetaMask';



const MakeGroup = () => {

  

    return (
        <div className="MakeGroup">
          <div className="hautDePage"></div>
          <div className="selectGroup">
            <MetaMask></MetaMask>
            <div className="addGroup">
              <input type="text" placeholder="Enter Adress" classNames="EnterAdressGroup"/>
              <Button text="Add to group" clas="boutonAddGroup"></Button>
            </div>
            
            <div>
              <ul className="listAdd">
                
              </ul>
            </div>
            
            <div>
            <Button text="Create" clas="creatGroupe"></Button>
            </div>
            

          </div>
        </div>
    );
};


export default MakeGroup;