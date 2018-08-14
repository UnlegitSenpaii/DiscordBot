const cmd = require("discord.js-commando");

class jaulCommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "jaul",
          group: "simple",
          memberName: "jaul",
          description: "Jault"
       });
    }
    async run(message, args)
    {
        message.channel.send("`Aaaauuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu`")
    }

}

module.exports = jaulCommand;