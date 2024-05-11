import { server } from '../App'

function Home() {
    server.hello()
    server.socket.on("helloBack", () => {
        console.log("fala bobo")
    })
    return (
        <div className='w-screen h-screen bg-blue-200'>
            Homeeeeee
        </div>
    )
}

export default Home