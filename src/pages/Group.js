import React from 'react';
import { useParams } from "react-router-dom";



const Group = () => {
    let { id } = useParams();
    return (
        < div >
            <div className="Headergroup" >
                <p className="desplitgroup" > DeSplit </p> </div>

            <div className="bodygroup" >

                <div className="firstheadergroup" >
                    <p className="fhg" > Group: {id} </p>

                </div>
            </div>
        </div >
    );
}

export default Group;