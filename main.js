const cmd = require("discord.js-commando");
const bot = new cmd.Client();
const discord = require("discord.js");
const fs = require("fs");
const moment = require("moment");

let userData = JSON.parse(fs.readFileSync("Storage/userData.json", "utf8"));

bot.registry.registerGroup("musik", "Musik");
bot.registry.registerGroup("simple", "Simple");
bot.registry.registerGroup("geld", "Geld");
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname+ "/commands");

global.disablechat = false;
global.servers = {};

bot.on("message", function(message){


    if(bot.user == message.author)
    {return;}
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
        console.log("deleted message " + message.content + " in " + message.channel.name + " by " + message.author);       
    }
    //chatfilter end
    //Events
    let userData = JSON.parse(fs.readFileSync("Storage/userData.json", "utf8"));
    global.usersdata = userData;
    if(!userData[message.author + message.guild])//schaut ob der user vorhanden ist
    userData[message.author + message.guild] = {}
    if(!userData[message.author + message.guild].money)//das selbe bloß schaut der ob der geld hat wenn nicht dann gibt der dem 1k
    userData[message.author + message.guild].money = 1000;//start geld
    if(!userData[message.author + message.guild].lastDaily)
    userData[message.author + message.guild].lastDaily = "Not Collected"
    fs.writeFile("Storage/userData.json", JSON.stringify(userData), (err)=>{
        if(err)
        console.log("An error accured while trying to add a User to userData!")
    });
    if (message.content == "!täglich")
    {   //OWO
        if(userData[message.author + message.guild].lastDaily != moment().format("L"))
        {
            userData[message.author + message.guild].lastDaily = moment().format("L");
            userData[message.author + message.guild].money += 500;
            var daily = new discord.RichEmbed()
            .setTitle("Tägliche Belohnung")
            .addField("Du hast 500€ zu deinem Konto hinzugefügt bekommen!", "...", true)
            .setColor(0x73B2D9)
            .setTimestamp()
            message.channel.send(daily);
        }
        else
        {
            var dailyfailed = new discord.RichEmbed()
            .setTitle("Tägliche Belohnung")
            .addField("Du hast deine tägliche Belohnung eingesammelt!", "Du musst noch " + moment().endOf("day").fromNow() + ".", true)
            .setColor(0xFF0000)
            message.channel.send(dailyfailed)
        }
    }
    if(disablechat == true){
            message.delete();
            message.author.send("`The Chat is currently disabled!`")
        
    }

});


bot.on("ready", function(){
    console.log("------------------------------------------------------------");
    console.log("                       Bot started!");
    console.log("------------------------------------------------------------");
    let statuses = [
        "OwO",
        "Nur bei Gaming EV!",
        "Creator:⎛⎝Senpaii Satanist⎠⎞#1633"
    ]

    //message.member.roles.find("name","Neko")
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)]
        bot.user.setActivity(status);

    }, 10000)
    bot.user.setStatus("Online")

});




//process.env.BOT_TOKEN
bot.login(process.env.BOT_TOKEN);   //immer auf der letzten zeile!