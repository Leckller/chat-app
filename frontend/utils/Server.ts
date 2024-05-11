import { io, Socket } from "socket.io-client";

// please note that the types are reversed
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();

interface ServerInterface {
    Connect(): void
}

export default class Server implements ServerInterface {

    Connect(): void {
        throw new Error('Method not implemented.')
    }

}