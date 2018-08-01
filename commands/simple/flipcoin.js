const cmd = require("discord.js-commando");

class CoinFlipCommand extends cmd.Command
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
     var chance = Math.floor(Math.random() * 2);
     if (chance == 0){
         message.channel.send(message.author + ",`Deine Münze ist auf Kopf gelandet!`");
     }
     else 
        {
            message.channel.send(message.author +"`Deine Münze ist auf Zahl gelandet!`");
        }
    }

}

module.exports = CoinFlipCommand;