import React from 'react'

const EstouConseguindo = (props) => {
  return (
    <div>
        {props.estouConseguindo ? <h1> Estou indo bem</h1> : <h1> Nao estou conseguindo</h1>}
    </div>
  )
}

export default EstouConseguindo