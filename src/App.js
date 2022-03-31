import "./styles.css";
import React, { useState } from "react";

export default function App(props) {
  // estados do jogo: Entrada, rodando, fim
  const [estado, setEstado] = useState("Entrada");
  // palpites que a maquina deu
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);
  //0 <> 300
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("Rodando");
    setMin(0);
    setMax(300);
    setPalpite(150);
    setNumPalpites(1);
  };

  if (estado == "Entrada") {
    return <button onClick={iniciarJogo}>Começar a Jogar!</button>;
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };
  const acertou = () => {
    setEstado("Fim");
  };
  if (estado == "Fim") {
    return (
      <div>
        <p>
          Acertei o número {palpite} em {numPalpites} tentativas
        </p>
        <button onclick={iniciarJogo}>Reiniciar?</button>
      </div>
    );
  }
  if (estado == "Rodando")
    return (
      <div className="App">
        <p>O seu número é {palpite}?</p>
        <p>
          Min:{min} / Max:{max}
        </p>
        <button onClick={menor}>Menor</button>
        <button onClick={acertou}>Acertou</button>
        <button onClick={maior}>Maior</button>
      </div>
    );
}
