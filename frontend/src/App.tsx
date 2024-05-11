import { Route, Routes } from 'react-router-dom'
import { Home } from './routes'
import Server from '../utils/Server'

function App() {
  const server = new Server()
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
