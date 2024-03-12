import io, { Socket } from "socket.io-client";
// import io from 'socket.io-client/dist/socket.io';
// import type { Socket } from 'socket.io-client/dist/socket.io';
import { envConfig } from './config'
import { useAppDispatch } from "../redux/type";
import React, { useEffect } from "react";
import { connectSocket, disconnectSocket } from "../redux/reducer/socketReducer";
import useCurrentUser from "../hooks/useUser";


export let socket: Socket

const SocketProvider = ({ children }: { children: React.ReactElement }) => {
    const dispatch = useAppDispatch()
    const { currentUser } = useCurrentUser()

    socket = io(envConfig.SERVER_URL_LOCAL, {
        autoConnect: false,
        query: {
            userId: currentUser?._id
        }
        // transports: ['websocket']
    });

    useEffect(function didMount() {
        function onConnect() {
            dispatch(() => connectSocket({ socket, socketId: socket?.id! }))
        }
        function onDisconnect() {
            dispatch(() => disconnectSocket())
        }
        socket.on('connect', () => onConnect());
        socket.on('disconnect', onDisconnect);

        if (currentUser) {
            socket.connect()
            socket.emit('fetchUserChats')
        }

        return function didUnmount() {
            socket.disconnect();
            socket.removeAllListeners();
        };
    }, [currentUser]);

    return children
}

export default SocketProvider
