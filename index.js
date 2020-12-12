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
var multiply = function (num11, num22, msg) {
    if (!num11 || !num22 || !msg) {
        var error = "missing argument: \n example: \n .multiply(5, 6, message) \n will sent in the channel of the message an embed with the number 30";
        throw new Error(error);
    }
    var embed6 = new Discord.MessageEmbed()
        .setTitle(num11 + " * " + num22 + " \uD83E\uDD14")
        .setDescription("I know! the answer is: " + +num11 * +num22)
        .setColor("0076FF");
    return msg.channel.send(embed6);
};
module.exports.multiplie = multiply;
var divide = function (num111, num222, msg2) {
    if (!num111 || !num222 || !msg2) {
        var error = "missing argument: \n example: \n .divide(10, 2, message) \n will sent in the channel of the message an embed with the number 5";
        throw new Error(error);
    }
    var embed7 = new Discord.MessageEmbed()
        .setTitle(num111 + " * " + num222 + " \uD83E\uDD14")
        .setDescription("I know! the answer is: " + +num111 / +num222)
        .setColor("0076FF");
    return msg2.channel.send(embed7);
};
module.exports.divide = divide;
