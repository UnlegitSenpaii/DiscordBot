const fs = require("fs");
const cmd = require("discord.js-commando");
const discord = require("discord.js");



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
        var bankinfo = new discord.RichEmbed()
        .setColor(0x73B2D9)
        .setTitle("Bank")
        .addField("Konto Inhaber: ", message.author.username, true)
        .addField("Konto Saldo: ", usersdata[message.author + message.guild].money, true)
        .setTimestamp()


     message.channel.send(bankinfo)
    }

}

module.exports = MoneyCommand;