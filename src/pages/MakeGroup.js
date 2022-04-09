import React from 'react';
import Button from '../components/Button';
import MetaMask from '../components/MetaMask';

const Home = () => {


    return (
        <div className="MakeGroup">
          <div className="hautDePage"></div>
          <div className="selectGroup">
            <MetaMask></MetaMask>
            <div className="addGroup">
              <input type="text" placeholder=""/>
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


export default Home;