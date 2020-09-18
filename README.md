# 🎓BLOGPOSTS

Aplicação mobile desenvolvida com React Native e typescript. Se baseia numa página que consulta posts em uma API e os retorna com a estrutura Titulo e Corpo sendo possível remover, e criar novos posts.

## 📁Tecnologias

📕 React Native

📘 Typescript

💅 Styled-components

🔗 Axios

## Rotas

GET POST
```bash
/posts
```
GET
```bash
/posts/:id
```

Estrutura dp post:
```bash
[
  {
    body: string,
    title: string,
    id: number,
    userId: number,
  }
]
```
## Como executar?

É necessário ter instalado o node e o yarn (ou npm que já acompanha na instalação do node) e o Android SDK para que o emulador seja chamado para preview do App. 

Clonar o repositório e em cada pasta (web, server, mobile) executar pelo prompt 
```bash
yarn
```
ou
```bash
npm install 
```
para que então os repositórios necessários sejam baixados. Para executar os projetos web e server, basta em sua raiz executar 

para gerar a build da app, executar:
```bash
$ yarn android 
ou 
$ npm android
```

e, caso não inicie automaticamente, iniciar o metro bundler com:
```bash
$ yarn start 
ou 
$ npm start
```

Baseando-se no modelo:

<p align="center">
<img  src="https://cdn.discordapp.com/attachments/700348106419470369/747478882550153346/unknown.png"  width="800"/>
</p>

Abaixo seguem algumas amostras das telas mobile.

<p align="center">
<img  src="https://github.com/carloshrf/blogposts/blob/master/public/images/create.png?raw=true"  width="300"/>
</p>

<p align="center">
<img  src="https://github.com/carloshrf/blogposts/blob/master/public/images/delete.png?raw=true"  width="300"/>
</p>

<p align="center">
<img  src="https://github.com/carloshrf/blogposts/blob/master/public/images/home.png?raw=true"  width="300"/>
</p>

<p align="center">
<img  src="https://github.com/carloshrf/blogposts/blob/master/public/images/success.png?raw=true"  width="300"/>
</p>
