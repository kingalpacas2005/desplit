import React from 'react';

const Home = () => {
    return (< div classname="body" >
        <div className="header_main">
            <div className="Desplit">DSplit</div>
        </div>
        <div className='summary'>
            <div class="contenerTextHome">
                <br />
                <h3>Welcome to the splitting expense dApp !</h3>
                <br />
                Connect your wallet, use your cryptos then split transactions securely.
            </div>



        </div>
        <div className="espace"></div>
        <a href='groups/' className='button'>
            <button className="button" ><p className="inButton"> Lauch app </p></button>
        </a>
    </div >
    );
};

export default Home;