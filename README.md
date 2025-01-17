# Mock Server

## Introdução
Este é um servidor mockado para desenvolvimento, utilizando Node.js, Express e Faker.js para gerar dados fictícios.

## Estrutura do Projeto
```
.gitignore
data/
  consultant.js
  regulator.js
  regulatorList.js
docker-compose.yml
Dockerfile
package.json
routes/
  api.js
server.js
```

## Pré-requisitos
- Node.js
- Yarn

## Instalação
1. Clone o repositório:
   ```sh
   git clone https://github.com/ntsma/mockapisofia
   cd mock-server
   ```

2. Instale as dependências:
   ```sh
   yarn install
   ```

## Executando o Servidor

### Localmente
Para iniciar o servidor localmente, execute:
```sh
yarn start
```

### Com Docker
Para iniciar o servidor usando Docker, execute:
```sh
docker-compose up --build
```
O servidor estará disponível em `http://localhost:3090`.

## Endpoints da API

### Regulators
- `GET /apiMock/regulator/home`: Retorna a lista de reguladores.
- `GET /apiMock/regulator/forwarded`: Retorna a lista de reguladores encaminhados.
- `POST /apiMock/regulator/solicitation/read/:id`: Marca uma solicitação como lida.
- `GET /apiMock/regulator/rejects`: Retorna a lista de reguladores rejeitados.
- `GET /apiMock/regulator/returned`: Retorna a lista de reguladores devolvidos.

### Consultants
- `GET /apiMock/consultant/home`: Retorna a lista de consultores.
- `GET /apiMock/consultant/answers`: Retorna a lista de respostas dos consultores.
- `GET /apiMock/consultant/scheduledsLista`: Retorna a lista de consultas agendadas.

### Processes
- `GET /apiMock/processes/solicitations`: Retorna a lista de solicitações de processos.
- `GET /apiMock/processes/solicitationsSOF`: Retorna a lista de solicitações SOF.

## Estrutura dos Dados

### Regulators
Os dados dos reguladores são gerados no arquivo [data/regulator.js](data/regulator.js).

### Consultants
Os dados dos consultores são gerados no arquivo [data/consultant.js](data/consultant.js).

### Regulated List
Os dados da lista de reguladores são gerados no arquivo [data/regulatorList.js](data/regulatorList.js).

## Contribuição
Sinta-se à vontade para contribuir com este projeto. Abra uma issue ou envie um pull request.

## Licença
Este projeto está licenciado sob a licença MIT.
