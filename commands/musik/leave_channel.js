const cmd = require("discord.js-commando");

class LeaveCommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "leave",
          group: "musik",
          memberName: "leave",
          description: "Verlässt deinem Voicechannel!"
       });
    }
    async run(message, args)
    {
        if(message.guild.voiceConnection)
        {
            message.guild.voiceConnection.disconnect()
            .then(message.channel.send("`Erfolgreich verlassen!`"))
        }
        else 
        {
            message.channel.send("`Der Bot muss zu einem Channel verbunden sein!`")
        }
    }

}

module.exports = LeaveCommand;