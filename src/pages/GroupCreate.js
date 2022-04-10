import React from 'react';
import Button from '../components/Button';
import MetaMask from '../components/MetaMask';


class GroupCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses: [1, 10]
    };
  }

  addAddress(address) {
    console.log(address)
  }
  getWallet(wallet) {
    console.log("in wallet", wallet);
  }

  render() {
    return (
      <div className="GroupCreate">
        <div className="hautDePage"></div>
        <div className="selectGroup">
          <div className="addGroup">
            <input type="text" placeholder="Enter Adress" classNames="EnterAdressGroup" />
            <button onClick={this.addAddress()}>Add to group</button>
          </div>

          <div>
            <ul className="listAdd">
              {this.state.addresses.map(address => <li>{address}</li>)}
            </ul>
          </div>

          <div>
            <Button text="Create" clas="creatGroupe"></Button>
          </div>


        </div>
      </div >
    );
  }
};


export default GroupCreate;