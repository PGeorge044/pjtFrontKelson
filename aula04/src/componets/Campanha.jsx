import React from "react";
import styles from "./Campanha.module.css";

const Campanha = ({ mes }) => {

  const definirMensagem = (mes) => {
    if (mes === "Setembro") {
      return "Prevenção ao suicídio";
    } else if (mes === "Outubro") {
      return "Conscientização sobre o câncer de mama";
    } else if (mes === "Novembro") {
      return "Prevenção e combate ao câncer de próstata";
    } else {
      return "Mês não definido";
    }
  };

  const definirCor = (mes) => {
    if (mes === "Setembro") return styles.Setembro;
    if (mes === "Outubro") return styles.Outubro;
    if (mes === "Novembro") return styles.Novembro;
    return "";
  };

  return (
    <div className={definirCor(mes)}>
      <p>{definirMensagem(mes)}</p>
    </div>
  );
};

export default Campanha;