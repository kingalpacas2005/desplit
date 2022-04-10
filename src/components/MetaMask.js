import React from 'react';


class MetaMask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wallet: {
                accountAddress: "",
            }
        };
    }

    async connectWallet() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            this.setState({ wallet: { accountAddress: accounts[0] } });
            this.props.onWalletChange(this.state.wallet);
            alert("Connected !");
        }
    }

    renderAddress() {
        if (this.state.wallet.accountAddress) {
            return (
                <div>
                    <p>
                        Address: {this.state.wallet.accountAddress}
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
                    <p>METAMASK</p>
                    <button onClick={() => this.connectWallet()}>Connect Wallet</button>
                </div>
            )

        }
    }
    render() {
        return (
            <div className="metaMask" >
                <img src="./../img/MetaMask.jpg" className="MetaMaskImage" />

                {this.renderAddress()}
            </div>
        )
    }
};


export default MetaMask;