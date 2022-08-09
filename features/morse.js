const { MessageEmbed, } = require('discord.js');
const {prefix} = require("../config.json")
const morseAlphabet = require("./decode/morseMap.json")

module.exports = (client) => {
    client.on('message', message => {
        function createEmbed(name, value) {
            const embed = new MessageEmbed()
            .setColor('#2bc8fb')
            .setTitle('Decrypt messages ')
            .addFields(
                {
                    "name": name,
                    "value": value,
                    "inline": true
                  }
            )
            .setTimestamp()
        
            return message.channel.send({embeds: [embed]})
        }

        if(!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).trim().split(' ')
        const command = args.shift().toLowerCase();
    
        if (command === "morse"){
            if(!args.length){
                createEmbed('*Error!*', 'Please input a morse code message to decode.')
            } else {
                function decodeMorse(morseCode) {
                    return morseCode.map(
                        a => a
                          .split(' ')
                          .map(
                            b => morseAlphabet[b]
                          ).join('')
                    ).join('');
                }
                var decoded = decodeMorse(args);

                createEmbed('*Decoded your morse code message!*', decoded)
            }
        }
    })
}