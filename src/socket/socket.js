import socketIo from "socket.io-client";

console.log({socket: process.env.REACT_APP_SOCKET_URL});

const socket = socketIo(process.env.REACT_APP_SOCKET_URL, {transports: ['websocket']});

export default socket;
