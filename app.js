const Discord = require("discord.js");
const Config = require("./config.json");
const Token = require("./token.json");
 
 const bot = new Discord.Client({disableEveryone: true});
 
 bot.on("ready", async() =>{
   console.log('$(bot.user.username) is online! on $(bot.guilds.size servers!');
   bot.user.setActivity("CuT is a god", {type: "STREAMING"});
   });
   
   bot.on("message", async message =>{
	   if(message.author.bot)return;
	   if(message.channel.type ==="dm") return;
	   
	   message.channel.send("Testando pipi popopo");
   });
	 
	 bot.login(Token.token);
	 ;
	  