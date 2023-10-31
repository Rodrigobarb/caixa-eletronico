import React from 'react';
import { Navigate } from 'react-router-dom';

function TelaInicial() {
  const [avancar, setAvancar] = React.useState(false);

  // Função para avançar para a próxima página
  const handleAvancar = () => {
    setAvancar(true);
  };

  if (avancar) {
    return <Navigate to="/caixa" />;
  }

  return (
    <div>
      <h1>Bem-vindo ao São João Banking</h1>
      <button onClick={handleAvancar}>Avançar para o Formulário</button>
    </div>
  );
}

export default TelaInicial;
