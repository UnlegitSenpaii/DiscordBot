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
        message.channel.send("`Nö`")
    }

}

module.exports = SkipCommand;