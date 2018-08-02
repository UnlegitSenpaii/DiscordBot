const fs = require("fs");
const cmd = require("discord.js-commando");
const discord = require("discord.js");
const moment = require("moment");


class DailyCommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "täglich",
          group: "geld",
          memberName: "täglich",
          description: "Hol dir deine tägliche Belohnung!"
       });
    }
    async run(message, args)
    {
        if(usersdata[message.author + message.guild].lastDaily != moment().format("L"))
        {
            usersdata[message.author + message.guild].lastDaily = moment().format("L");
            usersdata[message.author + message.guild].money += 500;
            var daily = new discord.RichEmbed()
            .setTitle("Tägliche Belohnung")
            .addField("Du hast 500€ zu deinem Konto hinzugefügt bekommen!", " ", true)
            .setColor(0x73B2D9)
            .setTimestamp();
            message.channel.send(daily);
        }
        else
        {
            var dailyfailed = new discord.RichEmbed()
            .setTitle("Tägliche Belohnung")
            .addField("Du hast deine tägliche Belohnung eingesammelt!", "Du musst noch " + moment().endOf("day").fromNow() + ".", true)
            .setColor(0xFF0000)
        }


    }

}

module.exports = DailyCommand;