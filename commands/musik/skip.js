const cmd = require("discord.js-commando");

class SkipCommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "skip",
          group: "musik",
          memberName: "skip",
          description: "Überspring das Lied was gerade abgespiel wird!//tut bisher nur die queue löschen!"
       });
    }
    async run(message, args)
    {
        if(message.member.voiceChannel)
        {
            if(!servers[message.guild.id])
            {
                servers[message.guild.id] = {queue: []}
            }
        }
    }

}

module.exports = SkipCommand;