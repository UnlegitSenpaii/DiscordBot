/*const fs = require("fs");
const cmd = require("discord.js-commando");
const discord = require("discord.js");



class VoteCommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "vote",
          group: "abstimmung",
          memberName: "vote",
          description: "Erstelle eine Abstimmung! Beispiel Befehl: vote soll_ich_mir_kekse_kaufen 4(leute die abstimmen dürfen) 60000(zeit in ms)"
       });
    }
    async run(message, args, args2, args3)
    {
        let votename;
        let votepersons;
        let votetime;


        if(args[0]){
            votename = args;
            if(args2[0]){
                if(isNaN(args2)){
                    votepersons = args2;
                    if(args3[0]){
                        if(isNaN(args3)){
                            votetime = args3;
                        }
                        else{
                            message.channel.send("`Du musst eine Zahl eingeben!`")
                        }
                    }
                    else{
                        votetime = 60000;
                    }
                }else{
                    message.channel.send("`Du musst eine Zahl eingeben!`")
                }
            }else{
                votepersons = 4;
            }
        }
        else{
            message.channel.send("`Du musst Argumente eingeben z.B: [Prefix]vote soll_ich_mir_kekse_kaufen 4(leute die abstimmen dürfen) 60000(zeit in ms)`")
        }

        

    }

}

module.exports = VoteCommand;*/