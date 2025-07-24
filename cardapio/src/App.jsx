import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Barracas from './Pages/Barracas.jsx';
import Cardapio from './Pages/Cardapio.jsx';
import Header from './Componets/Header.jsx';



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Barracas/>}/>
        <Route path="/cardapio/:id" element={<Cardapio/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
