"use strict";
exports.__esModule = true;
var Discord = require("discord.js");
var add = function (num1, num2, msg) {
    if (!num1 || !num2 || !msg) {
        var error = "missing argument: \n example: \n .add(5, 6, message) \n will sent in the channel of the message an embed with the number 11";
        throw new Error(error);
    }
    var embed6 = new Discord.MessageEmbed()
        .setTitle(num1 + " + " + num2 + " \uD83E\uDD14")
        .setDescription("I know! The answer is: " + (+num1 + +num2))
        .setColor("0076FF");
    return msg.channel.send(embed6);
};
module.exports.add = add;
var multiplie = function (num11, num22, msg) {
    if (!num11 || !num22 || !msg) {
        var error = "missing argument: \n example: \n .multiplie(5, 6, message) \n will sent in the channel of the message an embed with the number 30";
        throw new Error(error);
    }
    var embed6 = new Discord.MessageEmbed()
        .setTitle(num11 + " * " + num22 + " \uD83E\uDD14")
        .setDescription("I know! the answer is: " + +num11 * +num22)
        .setColor("0076FF");
    return msg.channel.send(embed6);
};
module.exports.multiplie = multiplie;
