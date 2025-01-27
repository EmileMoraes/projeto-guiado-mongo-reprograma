# On11-TodasEmTech-s14-ProjetoGuiado-BBD

Turma Online 11 - Todas em Tech | Back-end | 2021 | Semana 14: Projeto Guiado - CRUD com BD

## Combinados

Chamada, apresentação das monitoras e acordos:

<img src="https://i.pinimg.com/474x/b4/17/86/b41786b5e7627ed0c678a0ef4a62e9f6.jpg" alt="video chamada" width="200">

* Usar as reações do zoom e levantar a mão para sinalizar que gostaria de falar
* Enviar as dúvidas no chat
* Manter microfone desligado quando outras pessoas estiverem falando
* Manter câmera ligada o máximo possível
* Momento mão no código, momento de olho na tela

<br>
<br>

## Sobre o Projeto

O **FavMovies** é um sistema de gerenciamento de catálogos de filmes dos estudios Marvel, Ghibli e Pixar. 

Onde receberemos cadastros de títulos(filmes e séries) referenciando cada estúdio criador. 

```
"Relacionamento" no MongoDB? Como é isso?
- ref no model
- populate do find (eager loading)
```

## Tecnologias que vamos usar:
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm ou yarn` | Gerenciador de pacotes|
| `MongoDb` | Banco de dado não relacional orietado a documentos|
| `MongoDb Compass` | Interface gráfica para verificar se os dados foram persistidos|
 `Insomnia ou Postman` | Interface gráfica para realizar os testes|

<br>
<br>

## 📁 Arquitetura 

```
 📁 FavMovies
   |
   |-  📁 src
   |    |
   |    |- 📁 data
   |         |- 📄 database.js
   |
   |    |- 📁 controllers
   |         |- 📄 tituloController.js
   |         |- 📄 estudioController.js
   |
   |    |- 📁 models
   |         |- 📄 titulo.js
   |         |- 📄 estudio.js
   |
   |    |- 📁 routes
   |         |- 📄 tituloRoutes.js 
   |         |- 📄 estudioRoutes.js 
   |
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package
   |- 📄 server.js

```

<br>
<br>

## Contrato
Acesse o board para conferir as informações de forma visual: https://miro.com/app/board/o9J_lA7Nns8=/

### Requisitos 
- [ ]  **"/estudios/marvel"** Deverá retornar todos os títulos com o estudio Marvel
- [ ]  **"/estudios/ghibli"** Deverá retornar todos os títulos com o estudio Ghibli
- [ ]  **"/estudios/pixar"** Deverá retornar todos os títulos com o estudio Pixar

- [ ]  **"/estudios"** Deverá retornar todos os estudios cadastrados
- [ ]  "**/titulos**" Deverá retornar todos os títulos cadastrados, cada um fazendo referencia ao seu respectivo estudio

- [ ]  "**/estudios**" Deverá criar um estudio 
- [ ]  "**/titulos**"  Deverá criar um título 

- [ ]  "/titulos/[ID]" Deverá deletar titulo por id específico e retorna mensagem amigável
- [ ]  "/estudios/[ID]" Deverá deletar estudio por id específico e retorna mensagem amigável

- [ ]  "/titulos/[ID]" Deverá alterar informação específica dentro de um titulo por id específico e retorna o título alterado
- [ ]  "/estudios/[ID]" Deverá alterar informação específica dentro de um estudio por id específico e retorna o título alterado


### Regras de negócio

- [ ]  Não deverá ser possível criar estudio com o mesmo nome
- [ ]  Não deverá ser possível criar título com o mesmo nome
- [ ]  Para criar um novo título, deverá vincular no momento da criação a um estudio já existente no sistema

<br>
<br>

### Dados para Collection Estudios

- id: autogerado e obrigatório
- nome: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório


### API deve retornar seguinte JSON:

```jsx
[
    {
    "criadoEm": "2021-06-05T01:27:40.886Z",
    "_id": "60bad38c8c299c285d2685e7",
    "nome": "Marvel",
    "__v": 0
    },
    {
    "criadoEm": "2021-06-05T01:27:40.886Z",
    "_id": "60bad33d8c299c285d2685e5",
    "nome": "Ghibli",
    "__v": 0
  },
  {
    "criadoEm": "2021-06-05T01:27:40.886Z",
    "_id": "60bad33d8c299c285d2685e5",
    "nome": "Pixar",
    "__v": 0
  }
]
```
<br>
<br>

### Dados para Collection Titulos

- id: autogerado e obrigatório
- nome: texto e obrigatório
- genero: texto e obrigatório
- descricao: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório
- estudio: referencia do estudio cadastrado previamente obrigatório


### API deve retornar seguinte JSON:

```jsx
[
  {
    "criadoEm": "2021-06-05T01:27:40.892Z",
    "_id": "60bad3568c299c285d2685e6",
    "nome": "Spirited Away",
    "genero": "romance",
    "descricao": "SPIRITED AWAY é uma fantasia maravilhosa sobre uma jovem garota, Chihiro, presa em um estranho mundo novo de espíritos. Quando seus pais passam por uma transformação misteriosa, ela deve invocar a coragem que ela nunca soube que tinha para se libertar e retornar sua família para o mundo exterior. Uma história inesquecível e cheia de criatividade, SPIRITED AWAY o levará em uma jornada além da sua imaginação.",
    "estudio": {
      "criadoEm": "2021-06-05T01:27:40.886Z",
      "_id": "60bad33d8c299c285d2685e5",
      "nome": "Ghibli",
    }
  }
]
```
<br>
<br>

## Entregavel

Crie seu repositório contendo:
 - um readme com os maiores aprendizados nesse projeto e copiando todas as informações sobre o projeto
 - cumprimento total do contrato (requisitos e regras de negócios) 
 - realizar testes no Postman e verificar se os dados estão persistindo com o mongoDB

Subir o repositório no classroom.

## Simara Conceição
- [instagram](https://www.instagram.com/simara_conceicao)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [quero ser dev](https://queroserdev.com)