const cmd = require("discord.js-commando");

class nachrichtenCommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "messages",
          group: "simple",
          memberName: "messages",
          description: "Zeigt dir wieviele Nachrichten der Bot schon ''gesehen'' hat"
       });
    }
    async run(message, args)
    {
        message.channel.send("`Ich habe schon " + messagesinceonline + " Nachrichten bekommen`");
    }

}

module.exports = nachrichtenCommand;