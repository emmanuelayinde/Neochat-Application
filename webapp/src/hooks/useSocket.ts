import io, { Socket } from "socket.io-client";
import { envConfig } from '../utils/config'
import { useAppDispatch } from "../redux/type";
import { useEffect } from "react";
import { connectSocket, disconnectSocket } from "../redux/reducer/socketReducer";
import useCurrentUser from "./useUser";


export let socket: Socket

const useSocket = () => {
    const dispatch = useAppDispatch()
    const { currentUser } = useCurrentUser()

    console.log({ currentUser })

    socket = io(envConfig.SERVER_URL_LOCAL, {
        autoConnect: true,
        query: {
            userId: envConfig.USER_ID
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
        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);

        if (currentUser || envConfig.USER_ID) {
            console.log("Connecting socket")
            socket.connect()
        }

        return function didUnmount() {
            socket.disconnect();
            socket.removeAllListeners();
        };
    }, [currentUser]);



    return {
        socket
    }
}

export default useSocket
