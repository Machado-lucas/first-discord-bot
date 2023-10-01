![Discord_Bot](https://github.com/Machado-lucas/first-discord-bot/assets/51510946/44cb7cad-3107-4196-b141-cc4ef82c3938)

# O que é este projeto?

Esse é um projeto bem simples de como eu criei o meu primeiro bot no Discord utilizando a biblioteca [discord.js](https://discord.js.org/)!

# Requisitos

-   Ter Node instalado na máquina
-   Um editor de texto (eu utilizei o bom e velho VSCode)
-   Uma conta no [Discord](https://discord.com/)

# Habilitando o modo desenvolvedor no Discord

Para começarmos precisamos acessar o [Discord Developers](https://discord.com/developers/) e logar com a nossa conta do Discord, depois ir em Applications -> New Application

![Screenshot_4](https://github.com/Machado-lucas/first-discord-bot/assets/51510946/568f0363-e841-4ac3-8352-03aa2d9c6eb6)

Quando acessar o perfil da sua aplicação, vai ter um menuzinho a esquerda, vamos clicar em Bot para pegar a nossa primeira chave. Nesta aba, podemos alterar a foto e nome do nosso bot, mas o importante é clicar no botão Reset Token. Guarde esta informação pois nós vamos utilizar ela para configurar o nosso arquivo .env

![Screenshot_1](https://github.com/Machado-lucas/first-discord-bot/assets/51510946/47d04a32-866e-4379-acf5-a539336511ea)

Depois, descendo um pouco mais a aba Bot, ative estas configurações

![Screenshot_2](https://github.com/Machado-lucas/first-discord-bot/assets/51510946/5ca10bf9-5025-4d6f-9f7a-ee00d310c217)

Agora temos que adicionar um bot ao nosso servidor, recomendo que crie um servidor privado só seu para testar como se fosse um ambiente de desenvolvimento antes de adicionar o bot a um server com os seus amigos. Para isto, temos que entrar na aba OAuth2 -> URL Generator e dar as permissões necessárias. Em "SCOPES", selecione as opções bot e application.commands. Abaixo disso vai ter a aba "BOTS PERMISSIONS", vamos selecionar Administrator.

**Importante:** Selecione Administrator apenas em ambiente de desenvolvimento, depois de você criar tudo o que precisa, selecionar as opções que façam sentido no seu projeto.

![Screenshot_3](https://github.com/Machado-lucas/first-discord-bot/assets/51510946/ab07176c-8e02-4a52-983b-f41a25659f6e)

Logo abaixo na aba do BOTS PERMISSIONS, vai gerar uma url, clique nela e pode colar no navegador, neste link você vai estar convidando o seu bot para participar de um servidor em que você tem privilégios, então faça a escolha correta do servidor! Feito isso, o seu bot deve estar no servidor porém offline.

![Screenshot_5](https://github.com/Machado-lucas/first-discord-bot/assets/51510946/7975d2fa-9d1e-460b-ba41-866ee0f74d37)

# Deixando o bot funcional

Com o bot já adicionado ao servidor, precisamos dar vida a ele. Primeiramente, você vai clonar este projeto para a sua máquina (prometo que o código funciona e tá legal, fora que a estrutura inicial de criação de um bot é bem chatinha, você tendo esse esqueleto vai ser um ótimo start).

## Configurando o arquivo .env

Primeiramente precisamos configurar as nossas variáveis de ambiente, esse é um arquivo que não está disponível aqui nesse repositório por motivos de segurança, visto que as chaves são de **EXTREMA IMPORTÂNCIA** que você não deixe elas públicas por ai. Então rode este comando:

```
npm install dotenv
```

Depois crie um arquivo chamado **.env** e crie esta estrutura dentro dele:

![carbon](https://github.com/Machado-lucas/first-discord-bot/assets/51510946/21e7d65b-6ca0-4db9-9732-4fa7f2ea7dd3)

### Mas onde eu consigo essas chaves?

-   TOKEN: acredito que você já tenha ela, já que falei pra você salvar ela
-   CLIENT_ID: Clicando em OAuth2, logo ao lado vai aparecer o CLIENT_ID
-   GUILD_ID: Sempre que você ver algo relacionado a guild, é algo relacionado ao servidor que você deseja testar, ele não é mandatório mas eu utilizei neste projeto, estudando um pouco mais eu acho que não vai precisar dele em todos os bots (posso estar enganado). Tá blz cara mas onde eu pego ele? Vá no servidor de testes que você está desenvolvendo o bot, clica com o botão direito do mouse em cima do título e vai em copiar id, como na imagem abaixo

![Screenshot_6](https://github.com/Machado-lucas/first-discord-bot/assets/51510946/bb53f297-be3c-4bf7-b34d-9e7c1e460cfe)

## Colocando o node_modules e rodando o projeto

Estamos chegando ao grand finale desde repositório (UAU). Para finalizar precisamos instalar o node_modules neste projeto, para isso basta rodar o comando

```
npm install
```

Também precisamos rodar o nosso arquivo Deploy Commands, que é basicamente o arquivo que instala os comandos do bot ao servidor

```
node deploy-commands.js
```

E depois rodar o arquivo principal, o index.js

```
node index.js
```

Depois podemos ir para o nosso queridíssimo servidor do discord e rodar o nosso (e único) comando /ping

![Screenshot_7](https://github.com/Machado-lucas/first-discord-bot/assets/51510946/9c5605db-18f0-4f11-97eb-c6e75bc26652)

**Nota:** este /ping é equivalente ao Hello World das linguagens de programação!
