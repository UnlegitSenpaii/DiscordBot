const ytdl = require("ytdl-core");
const cmd = require("discord.js-commando.js")

class PlayCommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "play",
          group: "musik",
          memberName: "play",
          description: "Spielt Musik - nur youtube links!"
       });
    }
    async run(message, args)
    {
        if(!message.member.voiceChannel)
        message.channel.send("`Du musst in einem Voicechannel sein um diesen Befehl zuu benützen`");
    
        if(message.guild.me.voiceChannel)
        message.channel.send("`Der Bot ist schon in einem Voicechannel`");
    
        if(!args[0])
        message.channel.send("`Du musst eine URL eingeben!`");
    
        let validate = await ytdl.validateURL(args[0]);
    
        if(validate)
        message.channel.send("`Ungültige URL! Bitte überprüfe die URL und versuche es nocheinmal!`");
    
        let info = await ytdl.getInfo(args[0]);
    
        let connection = await message.member.voiceChannel.join();
    
        let dispatcher = await connection.play(ytdl(args[0], {filter: "audioonly"}));
    
        message.channel.send("Spiele: ${info.title}");
    }   
}

module.exports = PlayCommand;