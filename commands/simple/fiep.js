const cmd = require("discord.js-commando");

class fiepCommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "fiep",
          group: "simple",
          memberName: "fiep",
          description: "fiep fiep"
       });
    }
    async run(message, args)
    {
        message.channel.send("`fiep fiep`")
    }

}

module.exports = fiepCommand;