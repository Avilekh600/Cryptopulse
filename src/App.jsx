
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'

function App() {
 

  return (
    <>
    <div className="app">
      <Navbar/>
      <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/coin/:coinID' element={ <Coin/> } />
      </Routes>
    </div>

    </>
  )
}

export default App
