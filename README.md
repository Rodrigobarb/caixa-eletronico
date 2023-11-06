# README - Projeto Caixa Eletrônico

Esse projeto é de um caixa eletrônico desenvolvido em React, com funcionalidades para calcular a combinação de notas a serem entregues com base em um valor desejado. O projeto é composto por dois componentes principais: `TelaInicial` e `CaixaEletronico`. A `TelaInicial` é a página inicial do aplicativo e permite ao usuário navegar para a tela do `CaixaEletronico`.

## Tela Inicial (`TelaInicial.js`)

O componente `TelaInicial` é a página inicial do aplicativo. Ele exibe uma mensagem de boas-vindas e um botão que permite ao usuário avançar para a tela do caixa eletrônico.

### Funcionalidades

- Exibe uma mensagem de boas-vindas.
- Contém um botão "Avançar para o Formulário" que leva o usuário para a tela do caixa eletrônico quando clicado.

## Caixa Eletrônico (`CaixaEletronico.js`)

O componente `CaixaEletronico` é a página onde o usuário pode digitar um valor desejado e obter a combinação de notas que o caixa eletrônico deve entregar.

### Funcionalidades

- Permite ao usuário digitar um valor desejado em reais.
- Remove caracteres não numéricos e valida se o valor é maior que 1.
- Exibe o total de notas disponíveis no caixa eletrônico.
- Calcula a combinação de notas a ser entregue com base no valor desejado.
- Lida com erros, como valor indisponível ou erro na solicitação.
- Permite ao usuário cancelar a operação e voltar para a tela inicial.

### Uso

1. Digite o valor desejado em reais.
2. Clique no botão "Entrar" para calcular a combinação de notas.
3. Caso necessário, você pode clicar em "Corrige" para limpar o campo ou "Cancela" para voltar à tela inicial.
4. A combinação de notas é exibida quando o cálculo é bem-sucedido.

## Como executar o projeto

Para executar o projeto em sua máquina local, siga estas etapas:

1. Certifique-se de que você tenha Node.js instalado na sua máquina.

2. Clone o repositório do projeto:

   ```bash
   git clone <https://github.com/Rodrigobarb/caixa-eletronico.git>
   ```

3. Navegue até a pasta raiz do projeto:

   ```bash
   cd <caixa-eletronico.git>
   ```

4. Instale as dependências do projeto:

   ```bash
   npm install
   ```

5. Inicie o aplicativo:

   ```bash
   npm start
   ```

O aplicativo estará disponível no seu navegador em [http://localhost:3000](http://localhost:3000).

