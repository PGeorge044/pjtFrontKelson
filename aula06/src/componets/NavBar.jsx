import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <Link to="/">Inicial</Link><br/>
        <Link to="/contato">Contato</Link><br/>
        <Link to="/a-faculdade">Faculdade</Link><br/>
        <Link to="/dpo-lgpd">DpoLgpd</Link><br/>
        <Link to="/noticias">Noticias</Link><br/>
    </nav>
  )
}

export default NavBar