const cmd = require("discord.js-commando");
const bot = new cmd.Client();
const discord = require("discord.js");

bot.registry.registerGroup("musik", "Musik");
bot.registry.registerGroup("simple", "Simple");

bot.registry.registerCommandsIn(__dirname+ "/commands");


bot.on("message", function(message){
    //chatfilter
        //liste der bösen wörtern   (immer klein schreiben!)
    let blacklisted = [
        "nazi",
        "schlampe",
        "wichser",
        "wixxer",
        "wixer"
    ];
    var foundbadword = false;

    for(var i in blacklisted){//nach bösen wörtern suchen c;
        if(message.content.toLowerCase().includes(blacklisted[i].toLowerCase()))
        foundbadword = true;
    }
    if (foundbadword)
    {
        message.delete();//löschen von dem bösen wort c;
        message.author.send(`Bitte achte auf deine Wortwahl!`);
        console.log("deleted message " + message.content + " in " + message.channel.name + " by " + message.author)
    }


});


bot.on("ready", function(){
    console.log("------------------------------------------------------------");
    console.log("                       Bot started!");
    console.log("------------------------------------------------------------");
});






4
bot.login(process.env.BOT_TOKEN);   //immer auf der letzten zeile!