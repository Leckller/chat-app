import { Server } from 'socket.io'
import { ClientToServerEvents, ServerToClientEvents } from './types/Server';

const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents
>();

io.on('connection', (socket) => {
  console.log(`Usuário conectado. ID: ${socket.id} `);
});

io.on('connection', (socket) => {
  socket.on('clientMessage', (message) => {
    console.log(`Mensagem ${message}`);
    io.emit('serverMessage', message);
  });
})
