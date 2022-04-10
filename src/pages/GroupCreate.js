import React from 'react';
import Button from '../components/Button';


class GroupCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses: [
        "0xbda5747bfd65f08deb54cb465eb87d40e51b197e",
        "0xdd2fd4581271e230360230f9337d5c0430bf44c0",
        "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199",
      ],
      addressToAdd: "0x1cbd3b2770909d4e10f157cabc84c7264073c9ec"
    };
  }

  addAddress() {
    this.setState({ addresses: [...this.state.addresses, this.state.addressToAdd] });
  }

  handleInputChange(e) {
    this.setState({
      addresses: this.state.addresses,
      addressToAdd: e.target.value
    })
  }

  render() {
    return (
      <div className="GroupCreate">
         <div className='header' > DSplit </div>
         <div className="espace"></div>
        <div className="hautDePage"></div>
        <div className="selectGroup">
          <div className="addGroup">
            <input  className="textAdress" placeholder="Enter Adress" value={this.state.addressToAdd} onChange={(event) => this.handleInputChange(event)} />
            <button className="inputAdress button"onClick={() => this.addAddress()}><div className="inButton">Add to group</div></button>
          </div>

          <div className="contenerListAdd">
            <ul className="listAdd borderFormulaire">
              {this.state.addresses.map(address => <li>{address}</li>)}
            </ul>
          </div>
          <div className="espace"></div>
          <div className="contenerButton">
            <Button text="Create" clas="creatGroupe"></Button>
          </div>


        </div>
      </div >
    );
  }
};


export default GroupCreate;