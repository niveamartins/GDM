# GDM

## Como configurar

### Back-end: Node.js
Para o backend da aplicação foi escolhido o Node.js e para servir:
	'$ npm install'
  '$ npm start'

A porta estabelecida é a 3333, mas é possível mudar isso no arquivo App.js.


### Front-end: React.js
Para o front da aplicação escolhemos o React.js.
Caso você já tenha o url para o seu backend, basta ir em api.js dentro da pasta services e mudar a string baseURL.

Para servi-lo basta:
  '$ npm install'
  '$ npm start'
  
A porta estabelecida é a 3000.


## Como usar e funções

### Login
A primeira página da aplicação (rota "/") é a página de login. Nela há opções de cadastro e login. Para acessar o restante da aplicação, é necessário que o usuário esteja autenticado.

### Cadastro 
Caso o usuário escolha cadastrar-se, ele será designado para a rota "".

### Alertas de Máquinas Quebradas
Para a exibição de máquinas quebradas, o técnico logado deve, através do painel, selecionar a opção alertas. Isso irá designá-lo para a rota "/alertas". Nessa página, é possível acessar todas as máquinas quebradas e selecionar uma para ter mais detalhes ou editar.

### Lista de Laboratórios
No painel, se selecionarmos a opção de Laboratórios, poderemos acessar uma lista de todos os laboratórios e suas informações. Isso é encontrado na rota "/labs"

### Lista de Máquinas
Ao selecionarmos um laboratório específico, conseguimos listar todas as suas máquinas e as informações de cada uma. Caso o usuário deseje mais informações ou editar as existentes, é possível ao selecionar uma delas. A rota para a lista de máquinas é "/maquinas". Vale lembrar que para acessar essa lista, o usuário deve selecionar um laboratório.

### Criar/Editar Informações de Máquina
Caso o usuário queira criar uma máquina, é só, dentro da lista de máquinas de um laboratório, ele apertar no botão "+", preencher as informações da máquina desejada e cadastrá-la. A rota é "/createMachine".
Para editar, o processo é semelhante, mas o usuário deve estar na página da máquina. A rota para editar é "/edit".

### Criar Laboratório
Na página de lista de laboratórios é possível adicionar um novo laboratório ao pressionar o botão "+". A rota é "/createLab".

### Leitor QR Code
Para acessar uma máquina a partir de um QR Code, o usuário dispôem da opção QR Code no painel que o designará para a rota "/qrcode" e, dentro dessa página, o usuário deve ler o QR Code e apertar o botão "Ir para máquina".


## Rotas estabelecidas do back-end e possíveis requests


### Rotas sem autenticação
* /users (get -> retorna todos os usuários)
* /user (post -> cadastra um usuário)
* /auth (post -> autentica um usuário)

### Rotas com autenticação
* /machines (get -> retorna todas as máquinas)
* /broken (get -> retorna as máquinas quebradas)

* /machine (get -> "machine/:id" retorna as informações da máquina que tem aquele id; 
            post-> cria uma máquina nova;
            delete -> "machine/:id" deleta a máquina encontrada naquele id;
            put -> atualiza as informações da máquina)
            

* /labs (get -> retorna todos os laboratórios)

* /lab (get -> "lab/:id" retorna as máquinas do laboratório com aquele id;
        put -> atualiza as informações daquele laboratório;
        post -> cria um laboratório novo)

## Pacotes Adicionais


### Back-end:

    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "knex": "^0.20.13",
    "sqlite3": "^4.1.1"

### Front-end:

    "axios": "^0.19.2",
    "qrcode": "^1.4.4",
    "react-icons": "^3.9.0",
    "react-qr-reader": "^2.2.1",
    "react-router-dom": "^5.1.2"
