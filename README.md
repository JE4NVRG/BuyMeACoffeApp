# Buy Me a Coffee - Projeto com Thirdweb

Este projeto é uma aplicação web que permite aos usuários comprar um café para o criador do projeto através de uma transação blockchain. Ele foi desenvolvido utilizando o framework Thirdweb para interagir com a blockchain Ethereum na rede de teste Sempolia.

## Endereço do Contrato

O contrato inteligente está implantado no seguinte endereço na rede Sempolia:

- **Endereço do Contrato**: [0x27642B0D5e16E38e6dBaE56BDB4F9659E16ccC9d](https://base-sepolia.blockscout.com/address/0x27642B0D5e16E38e6dBaE56BDB4F9659E16ccC9d)

## Hashes de Transação de Teste

Aqui estão alguns hashes de transações de teste que foram realizadas durante o desenvolvimento:

- `0x5f1fa9f99fc2a980c309f9ad025b8318f093ea07285598d7f71bb6b48780a9c0`
- `0xf8eb8f3a2429889bd69752fc15acb621aac8800702ec762282ddceea90681aa6`

## Funcionalidades

- **Conexão com Carteira**: Usuários podem conectar suas carteiras Ethereum para interagir com o contrato.
- **Doação**: Usuários podem enviar ETH como uma forma de gorjeta (doação) junto com uma mensagem personalizada.
- **Visualização de Doações**: É possível ver o total de doações e detalhes das últimas doações recebidas.

## Tecnologias Utilizadas

- **Thirdweb**: Usado para interação simplificada com contratos inteligentes.
- **React**: Framework usado para construir a interface do usuário.
- **Solidity**: Linguagem de programação usada para escrever o contrato inteligente.

## Configuração do Projeto

Para rodar este projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/JE4NVRG/BuyMeaCoffee-thirweb
   ```

2. **Instale as dependências:**

   ```bash
   yarn install
   ```
3. **Inicie o servidor de desenvolvimento:**   
   ```bash
   yarn dev
   ```

   **Arquivo `.env`***
   Para configurar corretamente o projeto, você precisa criar um arquivo .env na raiz do projeto e adicionar a seguinte variável de ambiente:

   ```makefile
   NEXT_PUBLIC_CLIENT_ID=seu_cliente_id
   ```

   ### API Thirdweb

   Você pode aprender mais sobre a API Thirdweb assistindo ao vídeo tutorial disponível [aqui](https://www.youtube.com/watch?v=n7zo7-DMRmQ).

   ### Links Relevantes

   - Projeto na Vercel: [https://projetodoacaoweb3.je4ndev.com/](https://projetodoacaoweb3.je4ndev.com/)
   - Repositório Thirdweb Example: [https://github.com/thirdweb-example](https://github.com/thirdweb-example)
   - Repositório Thirdweb Dev: [https://github.com/thirdweb-dev](https://github.com/thirdweb-dev)

   ### Licença

   Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

   ### Contato

   Se você tiver alguma dúvida ou sugestão, não hesite em entrar em contato através do GitHub ou por e-mail jean@je4ndev.com.
