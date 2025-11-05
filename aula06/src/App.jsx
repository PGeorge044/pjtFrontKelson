import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicial from './pages/Inicial'
import Contato from './pages/Contato'
import Faculdade from './pages/Faculdade'
import DpoLgpd from './pages/DpoLgpd'
import Noticias from './pages/noticias'
import NavBar from './componets/NavBar'
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element= {<Inicial/>}/>
        <Route path="/contato" element= {<Contato/>}/>
        <Route path="/a-Faculdade" element= {<Faculdade/>}/>
        <Route path="/dpo-lgpd" element= {<DpoLgpd/>}/>
        <Route path="/noticias" element= {<Noticias/>}/>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App