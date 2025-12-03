import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicial from './pages/Inicial'
import Faculdade from './pages/Faculdade'
import CustomNavbar from './components/CustomNavbar'

const App = () => {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Container className="my-4">
        <Routes>
          <Route path="/" element={<Inicial />} />
          <Route path="/a-faculdade" element={<Faculdade />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
