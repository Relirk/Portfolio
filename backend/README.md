# API

Este repositório contém uma API NodeJS utilizando express + serviços do Firebase

Tecnologias:

- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/)
- [Yarn](https://yarnpkg.com/)
- [Firebase](https://firebase.google.com/?hl=pt-br)

## Como executar

Faça o clone/download deste repositório, execute `yarn install`. Logo em seguida você pode executar a API como desenvolvedor pelo comando `yarn dev` tendo acesso aos logs, ou mesmo como prod pelo comando `yarn start`. A API fica localizada em `http://localhost:3333`.

## Variáveis de ambiente

Crie um arquivo .env na raiz do seu projeto com as seguintes variáveis de ambiente:

```
PORT=8080
APP_URL=http://localhost:8080
NODE_ENV=development

API_KEY=*VIA CONSOLE DO FIREBASE*
AUTH_DOMAIN=*VIA CONSOLE DO FIREBASE*
DATABASE_URL=*VIA CONSOLE DO FIREBASE*
PROJECT_ID=*VIA CONSOLE DO FIREBASE*
STORAGE_BUCKET=*VIA CONSOLE DO FIREBASE*
MESSAGING_SENDER_ID=*VIA CONSOLE DO FIREBASE*
APP_ID=*VIA CONSOLE DO FIREBASE*
```

## Rotas

Esta API contém as seguintes rotas:

- `GET /users` : lista os usuários do realtime database
- `PUT /users/id` : atualiza o usuário com o ID :id
- `POST /users` : cria um novo usuário
- `DELETE /users/:id` : apaga o usuário com ID :id

## Exemplos

### GET /users

Requisição:

```javascript
GET / tools;
```

Resposta:

```javascript
[
  {
    '288c0552e5823b0cf294e3dceb03d5cd': {
      age: 23,
      name: 'Chico',
      username: 'Francisco',
    },
    '73fa6f158e2f51f0cfac61f0b5887319': {
      age: 23,
      name: 'Chiquinho',
      username: 'Francisquinho',
    },
    bc28b185323c36a440285e5360b32b47: {
      age: 23,
      name: 'Chico',
      username: 'Francisco',
    },
  },
];
```

### PUT /users/:id

Requisição:

```javascript
GET /users/73fa6f158e2f51f0cfac61f0b5887319
```

Resposta:

```javascript
[
  {
    username: 'Chico',
    name: 'Francisco',
    age: 23,
  },
];
```

### POST /users

Requisição:

```javascript
// POST /users
// Content-Type: application/json
{
	"username": "Francisco",
	"name": "Chico",
	"age": 23
}
```

Resposta:

```javascript
{
  "age": 23,
  "name": "Chico",
  "username": "Francisco"
}
```

### DELETE /users/:id

Requisição:

```javascript
DELETE /users/473cf533f1300561c62430c5c3732d93
```

Resposta:

```javascript
// Status: 200 OK
{
}
```
