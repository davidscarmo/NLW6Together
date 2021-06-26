# NLW TOGETHER - LETMEASK

Aplicação desenvolvidade durante a semana NLW Together (20 a 27 de junho de 2021);

<p align="center">
  <img src="./src/assets/images/logo.svg" alt="Let Me Ask" width="200" /> 
</p>

# 💻 Sobre a aplicação
A LetMeAsk é uma aplicação web que faz a criação de salas para perguntas e apresenta a visão dessas salas do ponto de vista do admin e do usuário. As perguntas criadas são armazenadas no firebase e para a criação das perguntas é necessário realizar uma autenticação com o google.  

# 🚀 Tecnologias Utilizadas
+ <a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> ReactJS </a> 

+ <a href="https://sass-lang.com/" target="_blank"> <img src="https://raw.githubusercontent.com/tkswann2/tech-logos/master/sass.png" alt="sass" width="40" height="40"/> SASS</a>

+ <a href="https://firebase.google.com/" target="_blank"> <img src="https://raw.githubusercontent.com/tkswann2/tech-logos/master/firebase.png" alt="Firebase" width="40" height="40"/> Firebase</a>

# 🎨 Layout

O layout original pode ser acessado <a src="https://www.figma.com/file/D8S1RwNcYFtRz1OPkytB3e/Letmeask-(Copy)?node-id=0%3A1" target="_blank"> aqui.</a>
## Home - WEB

<img src="./src/assets/readmeImages/homeWeb.png" alt="home" width="800"/> 

## Criação de Sala - WEB
<img src="./src/assets/readmeImages/criacaoDeSalaWeb.png" alt="criação de sala" width="800"/>

## Sala Visão do Admin - WEB
<img src="./src/assets/readmeImages/salaAdminWeb.png" alt="sala visao admin" width="800"/>

## Sala Visão do User - WEB
<img src="./src/assets/readmeImages/salaViewerWeb.png" alt="sala visao do user" width="800"/>


## Home - Responsivo

<img src="./src/assets/readmeImages/home.png" alt="home" width="150"/> 

## Criação de Sala - Responsivo
<img src="./src/assets/readmeImages/criacaoDeSala.png" alt="criação de sala" width="150"/>

## Sala Visão do Admin - Responsivo
<img src="./src/assets/readmeImages/salaAdmin.png" alt="sala visao admin" width="150"/>

## Sala Visão do User - Responsivo
<img src="./src/assets/readmeImages/salaViewer.png" alt="sala visao user" width="150"/>




# ⚙️ Pré - Requisitos e Execução

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
Git, NPM e o VSCode.
<p>Siga os passos a seguir: </p>  

+ Instale as dependências com npm install 
+ Cria o arquivo .env.local e crie as seguintes variáveis ambiente: 
```env
REACT_APP_API_KEY = 
REACT_APP_AUTH_DOMAIN = 
REACT_APP_DATABASE_URL = 
REACT_APP_PROJECT_ID =
REACT_APP_STORAGE_BUCKET = 
REACT_APP_MESSAGING_SENDER_ID = 
REACT_APP_APP_ID =
``` 
+ Crie uma aplicação no firebase e copie os valores correspondentes do SDK para as variáveis.
+ Rode npm start 

# 🔥 Extras 

Foram adicionados alguns implementos na aplicação tendo como comparação a original desenvolvida. 
<p> Extras: 
  
  + Responsividade
  + Mensagens de erro personalizadas (react-hot-toast)
  + Adicação de modal (react-modal) de confirmação para exclusão de perguntas  
  + Alteração das cores do projeto
 </p>