import React from 'react';



const Home = () => {
    return (< div classname="body" >
        <div className="header_main">
            <div className="Desplit">DSplit</div>
        </div>
        <div className='summary'>
            <div class="contenerTextHome">
                Welcome !

                Splitting expenses is unsatisfaying: just make it more reliable today.
                Records debt or do immediate settlement with other parties.
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