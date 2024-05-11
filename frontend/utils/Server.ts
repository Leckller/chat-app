import { io, Socket } from "socket.io-client";
import { ClientToServerEvents, ServerToClientEvents } from '../types/Server'

export default class Server implements ClientToServerEvents {
    socket: Socket<ServerToClientEvents, ClientToServerEvents> = io("http://localhost:3000");

    hello() { this.socket.emit('hello') }
    clientMessage(text: string) {
        this.socket.emit("clientMessage", text)
    };
}
