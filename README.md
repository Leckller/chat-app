ator -> [login] include <- [token] -> server

ator -> [vinculo com outro usuario] -> include [salvar ids] -> server

ator -> [entrar em chat] { -> include [notificar os demais do chat que o ator entrou / está online]
    extend => [sair do chat]
    extend => [enviar mensagem]
}

interface User {
    username: string (UNIQUE)
}

interface Message extends User {
    text: string,
}

interface ChatRomm {
    // Deve verificar se a sala existe, caso não, emita um erro.
    //     
    joinChat(roomId: number) => void

    // As mensagens devem ser deletadas após 15 segundos depois de serem lidas,
    // O conteudo de cada mensagem não pode passar de 200 caracteres,
    sendMessage(content: Message) => void;
    
    // Deve notificar realizar o disconect do usuario e não notificar ao outro
    exitChat(content: User) =>
}