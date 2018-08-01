const cmd = require("discord.js-commando");

class purgecommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "purge",
          group: "simple",
          memberName: "purge",
          description: "deletes all messages in a channel!"
       });
    }
    async run(message, args)
    {
    if(message.member.hasPermission("MANAGE_MESSAGES"))
    {
     message.delete();
     const fetched = await message.channel.fetchMessages();
     message.channel.bulkDelete(fetched);
     message.channel.send("`Alle Nachrichten gelöscht!`");
    }
    else 
    {
        message.channel.send("`Du hasst nicht genug rechte um diesen Befehl auszuführen!`")
    }
    }

}

module.exports = purgecommand;
