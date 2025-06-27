import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './components/Login'
import Register from './components/Register'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
