import { useLocalStorage } from '../../hooks/useLocalStorage';
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

export const Test = () => {
    const [socket, setSocket] = useState(null);
    const { getData } = useLocalStorage();
    const currentUserID = getData("user")?.user?._id;


    useEffect(() => {
        const newSocket = io.connect('https://chatapp2-dg0k.onrender.com/', {
            transports: ['websocket'],
            query: { userId: currentUserID },
            autoConnect: true,
        });
        setSocket(newSocket);
        return () => newSocket.close();
    }, [setSocket]);

    // const [isDrawerOpen, setIsDrawerOpen] = useState(true);
    // // const [transitionDuration, setTransitionDuration] = useState(300); // Default duration: 300ms

    // const handleButtonClick = () => {
    //     setIsDrawerOpen(!isDrawerOpen);
    //     // setTransitionDuration(isDrawerOpen ? 300 : 1000); // Set duration to 3000ms when opening, and 300ms when closing
    // };

    return (

        // <div className="relative">
        //     <button
        //         onClick={handleButtonClick}
        //         className="bg-blue-500 text-white py-2 px-4 rounded"
        //     >
        //         Open Drawer
        //     </button>
        //     <div
        //         style={{ transitionDuration: `1500ms` }}
        //         className={`transition-transform absolute top-0 left-0 w-64 bg-white h-screen shadow ${!isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        //             }`}
        //     >
        //         <p className="p-4">Drawer Content</p>
        //     </div>
        // </div>

        <div className="App">
            <header className="app-header">
                React Chat
            </header>
            {socket?.connected ? (
                <div className="chat-container">
                    <p>Socket Is Connected</p>
                </div>
            ) : (
                <div>Not Connected</div>
            )}
        </div>
    );

}

export default Test