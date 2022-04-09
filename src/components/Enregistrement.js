import React, { useEffect, useRef, useState } from "react"
import io from "socket.io-client";
import Rooms from "./Rooms";




const Enregistrement = () => {

    var inform = document.getElementById('Enregistrement')

    const [ chat, setChat ] = useState([])

    const socketRef = useRef()
    const logPlayer = {
        host: false,
        roomId: null,
        username: "",
        socketId: "",
        game: ""
    };
    const socket = io();

    console.log(socket.ids)

   


    console.log(logPlayer)

    const usernameInput = document.getElementsByClassName('barrePseudo')

    const onMessageSubmit = (e) => {
        e.preventDefault()
        
        logPlayer.username = usernameInput[0].value; 
		logPlayer.host = true;
        logPlayer.socketId = socket.id;
        console.log(logPlayer)

        socket.emit('playerData', logPlayer);
	}

    return (
        <div className="Enregistrement">
            
            <form className="Enregistrement" onSubmit={onMessageSubmit}>
                <input type="text" placeholder="Pseudo" className="barrePseudo"/>
                
                <input type="submit" value="Jouer" className="btn"/>
            </form>
            <Rooms />
        </div>
    );
};

export default Enregistrement;