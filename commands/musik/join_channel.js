const cmd = require("discord.js-commando");

class JoinCommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "join",
          group: "musik",
          memberName: "join",
          description: "Tritt deinem Voicechannel bei!"
       });
    }
    async run(message, args)
    {

        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection){
                message.member.voiceChannel.join()
                .then(connection =>{
                    message.channel.send("`Erfolgreich beigetreten!`")
                })
            }
        }
        else
        {
            message.channel.send("`Du musst in einem Voicechannel sein!`")
        }
    }

}

module.exports = JoinCommand;