const Discord = require("discord.js");

const PREFIX = "f!";

var bot = new Discord.Client();

bot.on("ready", function() {
  console.log("Ready");
  bot.user.setGame("XD");
});

bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(PREFIX)) return;

  var args = message.content.substring(PREFIX.length).split(" ");
  
  switch (args[0].toLowerCase()) {
    case "ping":
      message.channel.sendMessage("pong");
      break;
    case "info":
      message.channel.sendMessage("Olen PerunaCraftin Discord botti.");
      break;
    default:
      message.channel.sendMessage("Invalid Command");
  }
});

bot.login(process.env.BOT_TOKEN);
