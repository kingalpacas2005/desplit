import React from 'react';

const Home = () => {
    return (< div classname="body" >
        <div className='header' > Desplit </div>
        <form className="connect"
            method="POST"
            action="GroupTransactions" >
            <button className="button" > Lauch app </button>
        </form>
    </div>
    );
};

export default Home;