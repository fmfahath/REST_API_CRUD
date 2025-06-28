import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './components/Login'
import Protectedroutes from './routes/Protectedroutes'

function App() {

  return (
    <div>
      <Routes>
        <Route
          path='/' element={<Protectedroutes><Dashboard /></Protectedroutes>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
