import React from 'react';
// import { wallet, reset, set } from "../wallet"



class MetaMask extends React.Component {
    constructor(props) {
        super(props);
        console.log(window.localStorage.getItem("wallet"));
        this.state = {
            wallet: window.localStorage.getItem("wallet") | {}
        };
    }

    async connectWallet() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            let w = { address: accounts[0] };
            window.localStorage.setItem("wallet", { w });
            this.setState({ wallet: w });
            alert("Connected !");
        }
    }

    renderAddress() {
        if (this.state.wallet.address) {
            return (
                <div>
                    <div className="metaMask" >
                        <img src="./../img/MetaMask.jpg" className="MetaMaskImage" /><p className="contenerAdress">Connected !{this.state.wallet.accountAddress}</p>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <p>
                        {this.state.accountAddress}
                    </p>

                    <button onClick={() => this.connectWallet()}>
                        <div className="metaMask" >
                            <img src="./../img/MetaMask.jpg" className="MetaMaskImage" /><p>METAMASK</p>
                        </div>
                    </button>
                </div>
            )

        }
    }
    render() {
        return (
            <div>
                {this.renderAddress()}
            </div>


        )
    }
};


export default MetaMask;