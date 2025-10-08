import React, { useState } from 'react';

function HookMegaSena() {
  const [numeroSorteado, setNumeroSorteado] = useState(null);
  const [numerosSorteados, setNumerosSorteados] = useState([]);

  const sortearNumero = () => {
    if (numerosSorteados.length >= 6) {
      alert("Já temos 6 números sorteados!");
      return;
    }

    let novoNumero;
    do {
      novoNumero = Math.floor(Math.random() * 60) + 1;
    } while (numerosSorteados.includes(novoNumero));

    setNumeroSorteado(novoNumero);
    setNumerosSorteados([...numerosSorteados, novoNumero]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Jogo da Mega Sena</h2>
      <p><strong>Número sorteado:</strong> {numeroSorteado ?? "-"}</p>
      <p><strong>Números já sorteados:</strong> {numerosSorteados.join(", ")}</p>
      <button onClick={sortearNumero}>Sortear Número</button>
    </div>
  );
}

export default HookMegaSena;
