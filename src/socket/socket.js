import socketIo from "socket.io-client";

const socket = socketIo(process.env.REACT_APP_SOCKET_URL, {transports: ['websocket']});

export default socket;
