import { Route, Routes } from 'react-router-dom'
import { Home } from './routes'
import Server from '../utils/Server'

export const server = new Server()
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
