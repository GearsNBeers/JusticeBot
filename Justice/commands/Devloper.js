
const { DiscordAPIError } = require("discord.js");
const { format } = require("path");
const chalk = require('chalk');
const Discord = require('discord.js');
const client = new Discord.Client();
const dynamic = new Discord.Client();
const fs = require('fs');
var memory = require("memory");
module.exports = {
	name: 'Developer',
	aliases: ["d", "devloper"],
	category: "info",
	description: 'information on bot',
	usage: ".jsstatus",
	run: async function (client, command, args, message) {
        const embed = new Discord.MessageEmbed()
        .setTitle('DEVELOPER')
        .addField('whois', 'usage: .js whois @user', true)
        .addField('id', 'usage: .js id @user', true)
        .addField('`Developer`', true)
        .addField('Eval', 'scans code for any errors ')
        .addField('LOGGING', true)
        .addField('Message Delete', 'Status: Online :green_circle: (for a more in-depth look run ` .jsstatuslogs`) ')
        .addField('Message Edit', 'Status: Disabled (not added in yet) :red_circle: ')
        message.channel.send(embed)
    }}