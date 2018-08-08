const cmd = require("discord.js-commando");
const YTDL = require("ytdl-core");

function Play(connection, message)
{
    var server = servers[message.guild.id]
    server.dispatcher = connection.playStream(YTDL(server.queue[0], 
        {
            filter:"audioonly" 
        }));
        server.queue.shift();
        server.dispatcher.on("end", function(){
            if(server.queue[0])
            {
                Play(connection, message);
            }
            else{
                connection.disconnect();
            }
        })
}


class JoinCommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "join",
          group: "musik",
          memberName: "join",
          description: "Tritt dem Voicechannel bei und spielt Musik! - URL bitte hinten hinschreiben"
       });
    }
    async run(message, args)
    {
        if(message.member.voiceChannel)
        {
            if(!servers[message.guild.id])
            {
                servers[message.guild.id] = {queue: []}
            }
            if(!message.guild.voiceConnection){
                message.member.voiceChannel.join()
                .then(connection =>{
                    var server = servers[message.guild.id]
                    message.channel.send("`Erfolgreich beigetreten!`");
                    server.queue.push(args);
                    Play(connection, message);
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