// Require the necessary discord.js classes
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js')
// .env
const dotenv = require('dotenv')
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

// Classe Client basicamente serve para criar os comandos do nosso bot
const client = new Client({ intents: [GatewayIntentBits.Guilds] })
client.commands = new Collection()

// Importação dos comandos
const fs = require("node:fs")
const path = require("node:path")

const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

// Aqui pega todos os arquivos dentro do commands e coloca ele dentro do client.commands para aparecer depois lá no discord todos os comandos
for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)

    if ("data" in command && "execute" in command) {
        client.commands.set(command.data.name, command)
    } else {
        console.log(`Esse comando em ${filePath} está com "data" ou "execute" ausentes`)
    }
}

// Login do bot
client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`)
})

client.login(TOKEN)


// Listener com as interações do bot
client.on(Events.InteractionCreate, async i => {
    if (!i.isChatInputCommand()) return

    const command = i.client.commands.get(i.commandName)
    if (!command) {
        console.error("comando não encontrado")
        return
    }

    try {
        await command.execute(i)
    }
    catch (error) {
        console.error(error)
        await i.reply("Houve um erro ao executar esse comando!")
    }
})