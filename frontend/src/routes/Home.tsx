import { useEffect, useState } from 'react'
import { server } from '../App'

function Home() {
    const [text, setText] = useState('');
    const [messages, setMessages] = useState<string[]>([])
    server.socket.on('serverMessage', (message) => {
        setMessages([...messages, message])
    })

    return (
        <div className='w-screen h-screen bg-blue-200'>
            <div className='flex flex-col h-[80%] max-h-[80%] overflow-y-auto'>
                {messages.length > 0 && messages.map((messageText, i) => (
                    <p key={i}>{messageText}</p>
                ))}
            </div>
            <form onSubmit={(e) => {
                e.preventDefault()
            }} className='flex flex-row w-full h-[20%] border-2'>
                <input
                    type='text'
                    onChange={({ target: { value } }) => setText(value)}
                    className='w-[80%] resize-none p-2'
                    maxLength={300} />
                <button onClick={() => {
                    server.clientMessage(text)
                }}
                    className='w-[20%] text-center text-white bg-black
                 hover:bg-green-400 transition-all'>
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default Home