"use strict";
exports.__esModule = true;
var Discord = require("discord.js");
var add = function (num1, num2, msg) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        var err = "Incorrect input!";
        throw new Error(err);
    }
    if (!num1 || !num2 || !msg) {
        var error = "Missing argument: \n Example: \n .add(5, 6, message) \n Will sent in the channel of the message an embed with the number 11";
        throw new Error(error);
    }
    var embed6 = new Discord.MessageEmbed()
        .setTitle(num1 + " + " + num2 + " \uD83E\uDD14")
        .setDescription("I know! The answer is: " + (+num1 + +num2))
        .setColor("0076FF");
    return msg.channel.send(embed6);
};
module.exports.add = add;
module.exports.addition = add;
var sub = function (num12, num21, msg) {
    if (typeof num12 !== 'number' || typeof num21 !== 'number') {
        var err = "Incorrect input!";
        throw new Error(err);
    }
    if (!num12 || !num21 || !msg) {
        var error = "Missing argument: \n Example: \n .sub(7, 5, message) \n Will sent in the channel of the message an embed with the number 2";
        throw new Error(error);
    }
    var embed6 = new Discord.MessageEmbed()
        .setTitle(num12 + " - " + num21 + " \uD83E\uDD14")
        .setDescription("I know! The answer is: " + (+num12 - +num21))
        .setColor("0076FF");
    return msg.channel.send(embed6);
};
module.exports.sub = sub;
module.exports.subtraction = sub;
var multiply = function (num11, num22, msg) {
    if (typeof num11 !== 'number' || typeof num22 !== 'number') {
        var err = "Incorrect input!";
        throw new Error(err);
    }
    if (!num11 || !num22 || !msg) {
        var error = "Missing argument: \n Example: \n .multiply(5, 6, message) \n Will sent in the channel of the message an embed with the number 30";
        throw new Error(error);
    }
    var embed6 = new Discord.MessageEmbed()
        .setTitle(num11 + " * " + num22 + " \uD83E\uDD14")
        .setDescription("I know! the answer is: " + +num11 * +num22)
        .setColor("0076FF");
    return msg.channel.send(embed6);
};
module.exports.multiplie = multiply;
module.exports.multiplication = multiply;
module.exports.multiply = multiply;
var divide = function (num111, num222, msg2) {
    if (typeof num111 !== 'number' || typeof num222 !== 'number') {
        var err = "Incorrect input!";
        throw new Error(err);
    }
    if (!num111 || !num222 || !msg2) {
        var error = "missing argument: \n example: \n .divide(10, 2, message) \n Will sent in the channel of the message an embed with the number 5";
        throw new Error(error);
    }
    var embed7 = new Discord.MessageEmbed()
        .setTitle(num111 + " * " + num222 + " \uD83E\uDD14")
        .setDescription("I know! the answer is: " + +num111 / +num222)
        .setColor("0076FF");
    return msg2.channel.send(embed7);
};
module.exports.divide = divide;
module.exports.division = divide;
