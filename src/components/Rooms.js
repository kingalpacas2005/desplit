import React, { useEffect, useRef, useState } from "react"
import io, { Socket } from "socket.io-client";

const Rooms = () => {


    const socket = io();

    
    const [ salles, setSalles ] = useState([])

    const socketRef = useRef()
    
    useEffect(
        () => {
            socketRef.current = io.connect("http://localhost:3001")
           

            socket.on('list rooms', (rooms) => {
                salles = setSalles(rooms);
            });
            return () => socketRef.current.disconnect()
        },
        [ salles ]
    )

    

    return (
        <div>
            <ul>
                {salles.map((value, index) => (
                    <li>
                        <p>Salon de {value.players[0].username} - {value.id}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Rooms;