
<img alt="Logo do ServeRest" src="./logo.svg" height="120" style="background-color:black;border-radius:10px;padding:10px;">
<a href="https://www.linkedin.com/in/lucas-veloso-assa-galego-661274174/">
<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>


---
### 💁‍♂️ Sobre

O Ignews Api é uma plataforma de CRUD(Create,Read,Update and Delete) de noticias desenvolvido em **NodeJs**.


### 🚀 Tecnologias

<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
<br/>
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
<br/>
<img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" />
<br/>
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
<br/>
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<br/>
<img src="https://raw.githubusercontent.com/Thalhammer/jwt-cpp/master/.github/logo.svg" style="width:100px;"/>

<label style='background-color:lightgray;padding:5px;color:white;font-weight:bold;'><span style="color: rgb(232, 53, 36);">Type</span><span style="color: rgb(0, 0, 0);">ORM</span>
</label>
<br/>

### 🏃 Iniciando

Para iniciar esse projeto primeiro precisamos ter o container do MongoDB funcionando para isso:

`docker run --name mongodb -p 27017:27017 -d -t mongo`

Com o container do MongoDB criado e iniciado abrimos o projeto e executamos na raiz dele o seguinte comando:

Yarn ` yarn `
Npm ` npm install `

Bibliotecas instaladas, estamos prontos para colocar a aplicação para funcionar e para isso:

Yarn ` yarn dev:server `
Npm ` npm run dev:server `


### 🚦 Rotas da Api

##### 📝 Posts

- GET : `http://localhost:3333/posts`

Rotas Autenticadas

Header:`Bearer token...`
- POST : `http://localhost:3333/posts`
- GET : `http://localhost:3333/posts/:id`
- PUT : `http://localhost:3333/posts/:id`
- DELETE : `http://localhost:3333/posts/:id`

Formatos de JSON ,POST e PUT 
`
{
	"title":"Titulo da postagem",
	"content":"Conteudo da postagem"
}
`

##### 📝👨‍💼 Post do usuário

- GET : `http://localhost:3333/userPost`

##### 👨‍💼 Usuários

- POST : `http://localhost:3333/users`

Rotas Autenticadas

Header:`Bearer token...`
- GET : `http://localhost:3333/users/:id`
- PUT : `http://localhost:3333/users/:id`
- DELETE : `http://localhost:3333/users/:id`

Formatos de JSON ,POST e PUT 
`
{
	"name":"Jhon Doe",
	"email":"jdoe@domain.com",
    "password:"verySecretPass"
}
`

##### 🔒 Autenticação

- POST : `http://localhost:3333/auth`

Formatos de JSON ,POST 
`
{
	"email":"jdoe@domain.com",
    "password:"verySecretPass"
}
`