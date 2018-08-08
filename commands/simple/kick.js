const cmd = require("discord.js-commando");

class KickCommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "flip",
          group: "simple",
          memberName: "flip",
          description: "Wirft eine Münze für dich!"
       });
    }
    async run(message, args)
    {
        if(message.author == "<@223876496291266560>"){
          const member = message.mentions.member.first();
          if(!member)
          return message.channel.send("`Du musst jemanden taggen z.B `@223876496291266560 ");

          member.kick({reason: "Ich liebe sie! von @Senpaii"});
        }
    }

}

module.exports = KickCommand;