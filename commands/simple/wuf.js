const cmd = require("discord.js-commando");

class wuffCommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "wuff",
          group: "simple",
          memberName: "wuff",
          description: "bellt, du kannst auch Leute anbellen indem du nach wuff die Person tagst mit @"
       });
    }
    async run(message, args)
    {
        if(args[0]){
            if(args == message.author){
                message.channel.send("`Du kannst dich nicht selber anbellen!`");
            }else{
            message.channel.send("`Wuff wuff" + args +"`")
            }
        }else{
                message.channel.send(args + "/tts wuff wuff");
            
        }
    }

}

module.exports = wuffCommand;