import React from 'react';
import { useParams } from "react-router-dom";

const GroupTransactions = () => {
    let { id } = useParams();
    return ( < div >
        <body >

        <div className = "Headergroup" >
        <p className = "desplitgroup" > DeSplit </p> </div>

        <div className = "bodygroup" >

        <div className = "firstheadergroup" >
        <p className = "fhg" > Group: { id } </p> 
        <p className = "fhg" > GroupTransactions </p>

        </div>



        </div>
        </body>
    </div >
    );
};
export default GroupTransactions;