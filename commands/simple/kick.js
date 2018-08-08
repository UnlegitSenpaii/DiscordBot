const cmd = require("discord.js-commando");

class KickCommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "kick",
          group: "simple",
          memberName: "kick",
          description: "Kickt spieler lol, DEVELOPER ONLY COMMAND!"
       });
    }
    async run(message, args)
    {
        if(message.author == "<@223876496291266560>"){
          message.member.kick({reason: "Ich liebe sie! von @Senpaii"});
        }
    }

}

module.exports = KickCommand;