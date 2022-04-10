import React from 'react';


class MetaMask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accountAddress: "",
        };
    }

    async connectWallet() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            this.setState({ accountAddress: accounts[0] });
            console.log(this.state.accountAddress);
            alert("Connected !");
        }
    }

    renderAddress() {
        if (this.state.accountAddress) {
            return (
                <div>
                    <img src="./../img/MetaMask.jpg" className="MetaMaskImage" />
                    <p>
                        Address: {this.state.accountAddress}
                    </p>
                </div>
            )
        }
        else {
            return (
                <div>
                    <p>
                        Address: {this.state.accountAddress}
                    </p>
                    <img src="./../img/MetaMask.jpg" className="MetaMaskImage" />
                    <p>METAMASK</p>
                    <button onClick={() => this.connectWallet()}>Connect Wallet</button>
                </div>
            )

        }
    }
    render() {
        return (
            <div className="metaMask" >
                {this.renderAddress()}
            </div>
        )
    }
};


export default MetaMask;