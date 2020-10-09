const { DiscordAPIError } = require("discord.js");
const { format } = require("path");
const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
const dynamic = new Discord.Client();
const fs = require('fs');
var memory = require("memory");
module.exports = {

    name: 'Help',
	aliases: ["h", "help"],
	category: "info",
	description: 'information on bot',
	usage: ".jshelp",
	run: async function (client, command, args, message) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Help')
        .addField('whois', 'usage: .js whois @user', true)
        .addField('**ID**', 'usage: .js id @user', true)
        .addField('`**Admin**`', true)
        .addField('Warn', 'Warns users for breaking rules')
        .addField('fun', true)
        .addField('MEMES!!! .jsmeme', true)
        .addField('cute stuff .jsawww', true )
        .addField('**peepee size machine** usage: .jspp', true )
        .addField('**local play**: usage .jsplay (youtube link or local file)', true )
        message.channel.send(embed)
    }}