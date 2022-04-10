import React from 'react';
import { useParams } from "react-router-dom";

const GroupTransactions = () => {
    let { id } = useParams();
    return ( < div >
            <div className="header_main">
                <div className="Desplit">DeSplit</div>
            </div>
    </div >
    );
};
export default GroupTransactions;