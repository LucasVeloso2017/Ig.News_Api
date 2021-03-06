
<div style="text-align:center">
<img alt="" src="./logo.svg" height="120" style="background-color:black;border-radius:10px;padding:10px;">
<br/>
<img alt="" src="./avatar.svg">


</div>
<a href="https://www.linkedin.com/in/lucas-veloso-assa-galego-661274174/">
<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>


---
### ๐โโ๏ธ Sobre

O Ignews Api รฉ uma plataforma de CRUD(Create,Read,Update and Delete) de noticias desenvolvido em **NodeJs**.


### ๐ Tecnologias

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
<img src="https://img.shields.io/badge/Typeorm-20232A?style=for-the-badge&logo=typeorm&logoColor=61DAFB" />


### ๐ Iniciando

Para iniciar esse projeto primeiro precisamos ter o container do MongoDB funcionando para isso:

`docker run --name mongodb -p 27017:27017 -d -t mongo`

Com o container do MongoDB criado e iniciado abrimos o projeto e executamos na raiz dele o seguinte comando:

Yarn ` yarn `
Npm ` npm install `

Bibliotecas instaladas, estamos prontos para colocar a aplicaรงรฃo para funcionar e para isso:

Yarn ` yarn dev:server `
Npm ` npm run dev:server `


### ๐ฆ Rotas da Api

##### ๐ Posts

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

##### ๐๐จโ๐ผ Post do usuรกrio

- GET : `http://localhost:3333/userPost`

##### ๐จโ๐ผ Usuรกrios

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

##### ๐ Autenticaรงรฃo

- POST : `http://localhost:3333/auth`

Formatos de JSON ,POST 
`
{
	"email":"jdoe@domain.com",
    "password:"verySecretPass"
}
`