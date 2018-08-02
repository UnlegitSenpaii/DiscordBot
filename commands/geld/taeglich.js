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
        
    }

}

module.exports = DailyCommand;