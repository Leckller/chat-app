export interface ClientToServerEvents {
    // Eventos do cliente para o servidor (envia uma requisição, sem logica no lado cliente)
    hello: () => void;
    clientMessage: (text: string) => void;
}

export interface ServerToClientEvents {
    // Eventos do servidor para o cliente (envia uma requisição, logica no lado cliente)
    helloBack: () => void
    serverMessage: (text: string) => void;
}
