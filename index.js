const { Client, Intents, Interaction } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const {token, prefix} = require("./config.json")
const TranslateMorse = require("./features/morse.js")

client.once('ready', () => {
    TranslateMorse(client)

    client.user.setActivity(`${prefix}morse (message) to decode!`, { type: 'PLAYING' })
    console.log('Translator is online.');
});
    
client.login(token);