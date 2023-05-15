
import './App.css'
import Home from './components/home'
import { Routes, Route } from 'react-router-dom'
import News from './components/News'
function App() {

  return (
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/news/:id" element={<News/>}/>
      </Routes>
  )
}

export default App
