const cmd = require("discord.js-commando");

class streichelnCommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "streicheln",
          group: "simple",
          memberName: "streicheln",
          description: "Belohne den Bot mit einer Streicheleinheit!"
       });
    }
    async run(message, args)
    {
            message.channel.send("`hechel hechel`");
    }

}

module.exports = streichelnCommand;