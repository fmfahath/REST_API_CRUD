import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './components/Login'
import Protectedroutes from './routes/Protectedroutes'
import NotFound from './pages/NotFound'

function App() {

  return (
    <div>
      <Routes>
        <Route
          path='/' element={<Protectedroutes><Dashboard /></Protectedroutes>} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
