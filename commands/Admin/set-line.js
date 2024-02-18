const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const express = require("express");
const db = require("quick.db");
const app = express();
module.exports = {
  run(client, message, args, db) {
        if (message.author.bot || !message.guild) return;
if (!message.member.hasPermission('ADMINISTRATOR'))return ;
    if (!db.get(`guild_${message.guild.id}`)) {// By Ahmed Abd El-Latif Gaming - Sekai
      db.set(`guild_${message.guild.id}`, {
        lineurl: "",
        reaction: "",
        channels: []
      });
    }

    if (message.content.includes("https://media.discordapp.net/attachments/")) {// By Ahmed Abd El-Latif Gaming - Sekai
      db.set(`guild_${message.guild.id}.lineurl`, args[0]);

      let att = new Discord.MessageAttachment(
        db.get(`guild_${message.guild.id}.lineurl`),
        "Line.gif"
      );

      return message.channel.send("**Done Updated The Line To**", att);
    } else {
      return message.channel.send(
        "**Please Enter A Vaild Discord Attachments URL**"
      );
    }
  },
  config: {// By Ahmed Abd El-Latif Gaming - Sekai
    name: "set-line",
    prems: "ADMINISTRATOR",
    type: "",
    alis: ["sl"]
  }
};