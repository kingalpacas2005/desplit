import React from 'react';

const Home = () => {
    return (< div classname="body" >
        <div className='header' > Desplit </div>
        <div className="espace"></div>
        <div className='summary'>
            <div class="contenerTextHome">
                Welcome !

                Splitting expenses is unsatisfaying: juste make it more reliable today.
                Records debt or do immediate settlement
            </div>
            


        </div>
        <div className="espace"></div>
        <a href='groups/' className='button'>
            <button className="button" ><p className="inButton"> Lauch app </p></button>
        </a>
    </div>
    );
};

export default Home;