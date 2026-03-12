# COFFEE4C0DE - Gerenciamento de Usuarios

Aplicacao web front-end para uma cafeteria ficticia, com foco em cadastro/login de usuarios e gerenciamento de enderecos usando a API Go Wash.

## Sumario

1. [Visao Geral](#visao-geral)
2. [Funcionalidades](#funcionalidades)
3. [Tecnologias](#tecnologias)
4. [Estrutura do Projeto](#estrutura-do-projeto)
5. [Como Executar](#como-executar)
6. [Fluxo de Navegacao](#fluxo-de-navegacao)
7. [API e Endpoints](#api-e-endpoints)
8. [Autenticacao](#autenticacao)
9. [Melhorias Futuras](#melhorias-futuras)
10. [Equipe](#equipe)
11. [Licenca](#licenca)

## Visao Geral

O projeto simula uma experiencia de e-commerce de cafe:

- Pagina inicial institucional com apresentacao dos produtos.
- Tela de cadastro de usuario.
- Tela de login.
- Home autenticada com slider de produtos.
- Pagina para listar, criar, editar e excluir enderecos do usuario.
- Pagina "Sobre nos" com informacoes da equipe.

## Funcionalidades

- Cadastro de usuario integrado com API externa.
- Login com armazenamento de token no `localStorage`.
- Listagem de enderecos autenticada via `Bearer token`.
- Criacao de novo endereco.
- Edicao de endereco existente (via endpoint da API).
- Exclusao de endereco com confirmacao.
- Navegacao entre paginas por links locais.

## Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)
- API REST (Go Wash API)

## Estrutura do Projeto

```txt
GerenciamentoDeUsuarios/
|-- index.html
|-- README.md
|-- LICENSE
|-- assets/
|   |-- Images/
|   |-- Gifs/
|   `-- Pages/
|       |-- login.html
|       |-- cadastro.html
|       |-- home.html
|       |-- enderecos.html
|       `-- sobre.html
|-- css/
|   |-- main.css
|   |-- nav.css
|   |-- index.css
|   |-- login_cadastro.css
|   |-- home.css
|   |-- endereco.css
|   |-- popup_end.css
|   |-- sobre.css
|   `-- MediaQueries/
`-- js/
    |-- index.js
    |-- cadastro.js
    |-- login.js
    |-- home.js
    |-- enderecos.js
    `-- sobre.js
```

## Como Executar

Como e um projeto front-end estatico, nao ha build.

1. Clone o repositorio:

```bash
git clone <url-do-repositorio>
cd GerenciamentoDeUsuarios
```

2. Abra o `index.html` no navegador, ou rode um servidor local:

```bash
# Exemplo com VS Code Live Server
# Clique com o botao direito em index.html > Open with Live Server
```

## Fluxo de Navegacao

1. `index.html` (landing page)
2. `assets/Pages/cadastro.html` (criacao de conta)
3. `assets/Pages/login.html` (autenticacao)
4. `assets/Pages/home.html` (area principal)
5. `assets/Pages/enderecos.html` (CRUD de enderecos)
6. `assets/Pages/sobre.html` (informacoes da equipe)

## API e Endpoints

Base URL utilizada:

```txt
https://go-wash-api.onrender.com/api
```

Documentacao oficial da API utilizada:

- https://github.com/DiogoJP202/project-dw

### Endpoints consumidos no projeto

#### 1) Criar usuario

- Metodo: `POST`
- URL: `/user`
- Arquivo: `js/cadastro.js`
- Body enviado:

```json
{
  "name": "Nome completo",
  "user_type_id": 1,
  "cpf_cnpj": "00000000000",
  "email": "email@dominio.com",
  "password": "senha123",
  "birthday": "2000-01-01",
  "terms": 1
}
```

#### 2) Login

- Metodo: `POST`
- URL: `/login`
- Arquivo: `js/login.js`
- Body enviado:

```json
{
  "email": "email@dominio.com",
  "password": "senha123",
  "user_type_id": 1
}
```

#### 3) Listar enderecos

- Metodo: `GET`
- URL: `/auth/address`
- Arquivo: `js/enderecos.js`
- Header:

```txt
Authorization: Bearer <access_token>
```

#### 4) Criar endereco

- Metodo: `POST`
- URL: `/auth/address`
- Arquivo: `js/enderecos.js`
- Header:

```txt
Authorization: Bearer <access_token>
Content-Type: application/json
```

- Body enviado:

```json
{
  "title": "Casa",
  "cep": "00000000",
  "address": "Rua Exemplo, 123",
  "number": "123",
  "complement": "Apto 12"
}
```

#### 5) Atualizar endereco

- Metodo: `POST` (conforme implementacao atual da API/projeto)
- URL: `/auth/address/{id}`
- Arquivo: `js/enderecos.js`
- Header:

```txt
Authorization: Bearer <access_token>
Content-Type: application/json
```

#### 6) Excluir endereco

- Metodo: `DELETE`
- URL: `/auth/address/{id}`
- Arquivo: `js/enderecos.js`
- Header:

```txt
Authorization: Bearer <access_token>
```

## Autenticacao

- Apos login, os dados retornados pela API sao armazenados em:
  - `localStorage['userdata']`
- O token (`access_token`) e usado nas requisicoes autenticadas para endereco.
- No carregamento da tela de login, o `localStorage` e limpo (`localStorage.clear()`).

## Melhorias Futuras

- Adicionar validacoes de formularios mais robustas (CPF/CNPJ, CEP e mensagens por campo).
- Tratar erros de API com feedback mais amigavel ao usuario.
- Proteger rotas front-end para evitar acesso sem token.
- Implementar busca/filtro de enderecos na tela de listagem.
- Adicionar testes automatizados de comportamento (E2E).

## Equipe

- Alessandra
- Diogo
- Giovanni
- Rodrigo
- Samea

GitHub da equipe:

- https://github.com/COFFEE4C0DE

## Licenca

Este projeto esta sob a licenca MIT. Consulte o arquivo `LICENSE` para mais detalhes.
