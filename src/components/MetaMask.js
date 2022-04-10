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
                    <div className="metaMask" >
                    <img src="./../img/MetaMask.jpg" className="MetaMaskImage" /><p className="contenerAdress">{this.state.wallet.accountAddress}</p> 
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