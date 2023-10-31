const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

function calcularCombinacaoNotas(notasDisponiveis, valorDesejado) {
  // Valores das notas disponíveis
  const notas = [100, 50, 20, 10, 5, 2];
  const combinacao = {};

  for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    // Calcula a quantidade de notas necessárias para atingir o valor desejado
    const quantidadeNotas = Math.min(Math.floor(valorDesejado / nota), notasDisponiveis[i]);

    if (quantidadeNotas > 0) {
      combinacao[nota] = quantidadeNotas;
      valorDesejado -= nota * quantidadeNotas;
    }
  }

  // Verifica se foi possível atingir o valor desejado com as notas disponíveis
  if (valorDesejado === 0) {
    return combinacao; // Retorna a combinação de notas
  } else {
    return null; // Retorna null se não for possível
  }
}

// Endpoint para calcular as notas com base nos dados fornecidos pelo usuário
app.post('/calcular-notas', (req, res) => {
  const notasDisponiveis = req.body.notasDisponiveis; // Array com quantidades de notas
  const valorDesejado = req.body.valorDesejado; // Valor desejado pelo usuário

  // Verifica se os dados fornecidos estão no formato correto
  if (!notasDisponiveis || !Array.isArray(notasDisponiveis) || notasDisponiveis.length !== 6) {
    return res.status(400).json({ sucesso: false, mensagem: 'Formato inválido para notas disponíveis.' });
  }

  // Verifica se o valor desejado é válido
  if (isNaN(valorDesejado) || valorDesejado <= 0) {
    return res.status(400).json({ sucesso: false, mensagem: 'Valor desejado inválido.' });
  }

  // Calcula a combinação de notas mais eficiente
  const combinacao = calcularCombinacaoNotas(notasDisponiveis, valorDesejado);

  // Verifica se a combinação foi calculada com sucesso
  if (combinacao) {
    res.json({ sucesso: true, combinacaoNotas: combinacao }); // Retorna a combinação de notas
  } else {
    res.status(400).json({ sucesso: false, mensagem: 'Não é possível realizar a transação.' });
  }
});
