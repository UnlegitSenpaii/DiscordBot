const cmd = require("discord.js-commando");
const bot = new cmd.Client();
const discord = require("discord.js");
const fs = require("fs");
const moment = require("moment");

let userData = JSON.parse(fs.readFileSync("Storage/userData.json", "utf8"));
let savedData = require("./Storage/savedData.json")

bot.registry.registerGroup("musik", "Musik");
bot.registry.registerGroup("simple", "Simple");
bot.registry.registerGroup("geld", "Geld");
//bot.registry.registerGroup("abstimmung", "Abstimmung");
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname+ "/commands");

global.messagesinceonline = 0;
global.dailyreward = false;
global.disablechat = false;
global.daily = false;
global.servers = {};
global.lastmessageuser = 0;
global.lastmessage = 0;


bot.on("message", function(message){
    if(bot.user == message.author)
    {return;}
    
    lastmessageuser = message.author.username;
    messagesinceonline++;// fügt eins zu messagessinceonline hinzu-> kann man gebrauchen für logs und so ein spaß c;
    if(messagesinceonline == 100){
        console.log("100 Messages were sent!");
    }else if(messagesinceonline == 1000){
        message.reply("Herzlichen Glückwunsch du bist die 1000 Nachricht die der Bot regestriert hat!");
        console.log("1000 Messages were sent!");
    }
    
    //chatfilter
        //liste der bösen wörtern   (immer klein schreiben!)
    let blacklisted = [
        "nazi",
        "schlampe",
        "wichser",
        "wixxer",
        "wixer",
        "arschloch",
        "hure",
        "mistgeburt",
        "fehlgeburt",
        "untermensch"
    ];
    var foundbadword = false;

    if(lastmessage == message.content){
        message.delete();
        message.author.send("`Du wiederholst dich!`")
        savedData[message.author] = {
            message: message.content,
            reason: "Wiederholung der Nachrichten",
            channel: message.channel.name
        }
        fs.writeFile("./Storage/savedData.json", JSON.stringify(savedData, null, 4));
    }

    for(var i in blacklisted){//nach bösen wörtern suchen c;
        if(message.content.toLowerCase().includes(blacklisted[i].toLowerCase()))
        foundbadword = true;
    }
    if (foundbadword)
    { 
        message.delete();//löschen von dem bösen wort c;
        message.author.send(`Bitte achte auf deine Wortwahl!`);
        console.log("deleted message " + message.content + " in " + message.channel.name + " by " + message.author);
        savedData[message.author] = {
            message: message.content,
            reason: "Wortwahl",
            channel: message.channel.name
        }
        fs.writeFile("./Storage/savedData.json", JSON.stringify(savedData, null, 4));
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

    
    userData[message.author + message.guild].money++;

      if(userData[message.author + message.guild].lastDaily != moment().format("LT"))
        {
            userData[message.author + message.guild].lastDaily = moment().format("LT");
            userData[message.author + message.guild].money += 500;
            dailyreward = true;
        }
     if(userData[message.author + message.guild].lastDaily = moment().format("LT"))
        {
            dailyreward = false
        }


    if(disablechat == true){
            message.delete();
            message.author.send("`The Chat is currently disabled!`")
        
    }
/*
    if(message.content = "Ich bin Gott!"){
        if (message.author == "<@223876496291266560>")//senpaii
        {
            if(message.member.roles.find("name","Gott"))
            {
                message.channel.send("`Ja bist du schon!..`");
            }
            else{
                if(message.guild.roles.find("name","Gott"))
                {
                    message.channel.send("`Oh, Sie haben nicht genug Rechte! Lassen sie mich das ändern! ...`");
                    let God = message.member.guild.roles.find("name", "Gott");
                    message.member.addRole(God);
                }else{
                    message.guild.createRole({
                    name: "Gott",
                    permissions: [8],
                    color: "FF0000",
                    position: "4",
                    mentionable: true,      
                });
                message.channel.send("`Oh, Sie haben nicht genug Rechte! Lassen sie mich das ändern! ...`");
                let God = message.member.guild.roles.find("name", "Gott");
                message.member.addRole(God);}
            }
        }else{
            message.channel.send("`Ööm nein?`")
            message.channel.send("`Soll ich den Tierarzt rufen, weil du soetwas behauptest?`")
        }
    }*/
    var chancewuff = Math.floor(Math.random() * 10);

    if(chancewuff == 5)
    {
        var diffe = Math.floor(Math.random() * 3);
        if(diffe == 1){
            message.channel.send("`wuff wuff`");
            var reee = Math.floor(Math.random() * 1337);
                if(reee == 666){
                    message.channel.send("`ALL YOU NORMIES GET OF OF MY DANG INTERNET!`")
                    message.channel.send("`RRREEEEeeeEEEeeEEEEEEEEEEeeeeEEEEEEEeeeeEE`")
                }
        }else if(diffe == 2){
            message.channel.send("`kleff`");
        }else{
            message.channel.send("`kleff kleff`")
        }
    }
    lastmessage = message.content;
    if(dailyreward == true)
        {
 /*           var daily = new discord.RichEmbed()
            .setColor(0x73B2D9)
            .setTitle("Bank")
            .addField("Du hast deine tägliche Belohnung abgeholt!", "In höhe von 500 GG", true)
            .setTimestamp()
            message.channel.send(daily);*/
        }
        else
        {
           /* var dailyfalse = new discord.RichEmbed()
            .setColor(0x73B2D9)
            .setTitle("Bank")
            .addField("Du hast deine tägliche Belohnung schon abgeholt!")
            .setTimestamp()
            message.channel.send(dailyfalse);*/
            
        }
});


if(daily)
{
      if(userData[message.author + message.guild].lastDaily != moment().format("LT"))
        {
            userData[message.author + message.guild].lastDaily = moment().format("LT");
            userData[message.author + message.guild].money += 500;
            dailyreward = true;
        }
     if(userData[message.author + message.guild].lastDaily = moment().format("LT"))
        {
            dailyreward = false
        }
}



bot.on("ready", function(){
    console.log("------------------------------------------------------------");
    console.log("                       Bot started!");
    console.log("------------------------------------------------------------");
    let statuses = [
        "OwO",
        "Nur bei Gaming EV!",
        "Creator:⎛⎝Senpaii Satanist⎠⎞#1633",
        "Vorteil durch Technologie!"
    ]
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)]
        bot.user.setActivity(status);
    }, 10000)
    bot.user.setStatus("Online");
});
//process.env.BOT_TOKEN
bot.login(process.env.BOT_TOKEN);   //immer auf der letzten zeile!