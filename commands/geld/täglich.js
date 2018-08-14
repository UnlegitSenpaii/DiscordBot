const fs = require("fs");
const cmd = require("discord.js-commando");
const discord = require("discord.js");



class täglichCommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "täglich",
          group: "geld",
          memberName: "täglich",
          description: "Hol deine tägliche Belohnung!"
       });
    }
    async run(message, args)
    {
        if(dailyreward == true)
        {
            var daily = new discord.RichEmbed()
            .setColor(0x73B2D9)
            .setTitle("Bank")
            .addField("Du hast deine tägliche Belohnung abgeholt!", "In höhe von 500 GG", true)
            .setTimestamp()

            message.channel.send(daily);
        }else
        {
            var dailyfalse = new discord.RichEmbed()
            .setColor(0x73B2D9)
            .setTitle("Bank")
            .addField("Du hast deine tägliche Belohnung schon abgeholt!")
            .setTimestamp()
            message.channel.send(dailyfalse);

        }
    }

}

module.exports = täglichCommand;