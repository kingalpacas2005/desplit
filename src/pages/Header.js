import React from 'react';
import { useParams } from "react-router-dom";

const GroupTransactions = () => {
    let { id } = useParams();
    return (< div >
        <div className="header_main">
            <div className="Desplit">DSplit</div>
        </div>
    </div >
    );
};
export default GroupTransactions;