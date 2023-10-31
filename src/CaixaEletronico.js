import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom'; // Importe o componente Navigate
import './Caixa.css';

function CaixaEletronico() {
  const [valorDesejado, setValorDesejado] = useState('');
  const [combinacaoNotas, setCombinacaoNotas] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [cancelado, setCancelado] = useState(false); // Estado para rastrear o botão "Cancelar"
  const [notasDisponiveis, setNotasDisponiveis ] = useState('');

  const handleClear = () => {
    setValorDesejado('');
    setErrorMessage('');
  };

  const handleReset = () => {
    setValorDesejado('');
    setCombinacaoNotas(null);
    setErrorMessage('');
  };

  const handleValueChange = (e) => {
    const newValue = e.target.value.replace(/[^\d]/g, ''); // Remover caracteres não numéricos
    setValorDesejado(newValue);
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const valorInteiro = parseInt(valorDesejado);

    if (isNaN(valorInteiro) || valorInteiro <= 0) {
      setErrorMessage('Digite um valor válido maior que 1.');
      return;
    }

    const notasDisponiveis = [9000, 1000, 2000, 1000, 500, 200];
    const totalDisponivel = notasDisponiveis.reduce((acc, nota, index) => {
      return acc + nota * (index % 2 === 0 ? 100 : 10);
    }, 0);
    setNotasDisponiveis(totalDisponivel);

    if (valorInteiro > totalDisponivel) {
      setErrorMessage('Valor indisponível com as notas disponíveis.');
      return console.log("oi");
   
    }

    try {
      const response = await axios.post('http://localhost:3000/calcular-notas', {
        notasDisponiveis: notasDisponiveis,
        valorDesejado: valorInteiro
      });

      if (response.data.sucesso) {
        setCombinacaoNotas(response.data.combinacaoNotas);
        setErrorMessage('');
      } else {
        setCombinacaoNotas(null);
        alert(response.data.mensagem);
      }
    } catch (error) {
      console.error('Erro ao calcular notas:', error);
    }
  };

  const handleCancela = () => {
    setCancelado(true);
  };

  // Restante do código ...

  if (cancelado) {
    return <Navigate to="/" />; // Navegue de volta à tela inicial quando cancelado
  }

  return (
    <div>
      <h2>Digite o valor desejado</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <span className="currency-symbol">R$</span>
          <input
            type="text"
            className="input-field"
            value={valorDesejado}
            onChange={handleValueChange}
          />
          <br />
          <label>{notasDisponiveis} </label>
          <br />
          <label>Cédulas disponíveis: 100, 50, 20, 10, 5, 2:</label>
          <br />
        </div>
        <button type="submit" className="entra-button spaced-button">
          Entrar
        </button>
        <button type="button" onClick={handleClear} className="corrige-button spaced-button">
          Corrige
        </button>
        <button
          type="button"
          onClick={handleCancela}
          className="cancela-button spaced-button"
        >
          Cancela
        </button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
      {combinacaoNotas && (
        <div>
          <h3>Combinação de Notas:</h3>
          <ul>
            {Object.entries(combinacaoNotas).map(([nota, quantidade]) => (
              <li key={nota}>
                {quantidade} nota(s) de R$ {nota}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CaixaEletronico;
