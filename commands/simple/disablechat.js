const cmd = require("discord.js-commando");

class DisableChatCommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "disablechat",
          group: "simple",
          memberName: "disablechat",
          description: "Deaktiviert den Chat! :wheelchair:"
       });
    }
    async run(message, args)
    {
        if(message.member.hasPermission("MANAGE_MESSAGES"))
        {
            if(disablechat == false)
            {
            disablechat = true;
            message.channel.send("`Erfolgreich den Chat deaktiviert!`")
            }
            else
            message.channel.send("`Chat ist schon deaktiviert!`")
        }
    }

}

module.exports = DisableChatCommand;