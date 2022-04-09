import React from 'react';
import { useParams } from "react-router-dom";


const GroupTransactions = () => {
    let { id } = useParams();
    return (<div >
        <body>
            <div className="Header" >
                <p>Id: {id}</p>
                <p> GroupTransactions </p>
            </div>
        </body>
    </div>
    );
};

export default GroupTransactions;