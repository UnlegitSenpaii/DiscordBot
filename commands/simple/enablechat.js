const cmd = require("discord.js-commando");

class EnableChatCommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "enablechat",
          group: "simple",
          memberName: "enablechat",
          description: "Aktiviere den Chat! :wheelchair:"
       });
    }
    async run(message, args)
    {
        if(message.member.hasPermission("MANAGE_MESSAGES"))
        {
            if(disablechat == true)
            {
            disablechat = false;
            message.channel.send("`Erfolgreich den Chat aktiviert!`")
            }
            else
            {
                message.channel.send("`Chat ist schon aktiviert!`")
            }
        }
    }

}

module.exports = EnableChatCommand;