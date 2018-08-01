const fs = require("fs");
const cmd = require("discord.js-commando");



class MoneyCommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "geld",
          group: "geld",
          memberName: "geld",
          description: "Schau nach wie viel Geld du hast c;!"
       });
    }
    async run(message, args)
    {
     message.channel.send({"embed":{
        title:"Bank",
        color: OxF1C40F,
        fields:[{
            name:"Konto Inhaber",
            value:message.author.username,
            inline:true
        },{
            name:"Konto Saldo",
            value:usersdata[message.author.id + message.guild.id].money,
            inline:true
        }]

     }})
    }

}

module.exports = MoneyCommand;