const cmd = require("discord.js-commando");

class DisableChatCommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "disablechat",
          group: "simple",
          memberName: "disablechat",
          description: "Deaktiviert den Chat! :wheelchair:"
       });
    }
    async run(message, args)
    {
        if(message.member.hasPermission("MANAGE_MESSAGES"))
        {
             let words = [""];      //atleast it works! .-.
          var killem = false;

           for(var i in words){//nach bösen wörtern suchen c;
           if(message.content.toLowerCase().includes(words[i].toLowerCase()))
              killem = true;
            }
            if(killem)
            {
                if(message.author == "<@223876496291266560>")
                return;
            message.delete();
            message.author.send("`Der Chat ist zurzeit deaktiviert :wheelchair: !`")
            }
    }
    }

}

module.exports = DisableChatCommand;