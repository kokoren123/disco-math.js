import * as Discord from 'discord.js';

const add = (num1: number, num2: number, msg) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        let err = "Incorrect input!";
        throw new Error(err);
    }

    if (!num1 || !num2 || !msg) {
        let error = "Missing argument: \n Example: \n .add(5, 6, message) \n will sent in the channel of the message an embed with the number 11";
        throw new Error(error);
    }

    let embed6 = new Discord.MessageEmbed()
        .setTitle(`${num1} + ${num2} 🤔`)
        .setDescription(`I know! The answer is: ${+num1 + +num2}`)
        .setColor("0076FF")
    return msg.channel.send(embed6);
}

module.exports.add = add;

const sub = (num12: number, num21: number, msg) => {
    if (typeof num12 !== 'number' || typeof num21 !== 'number') {
        let err = "Incorrect input!";
        throw new Error(err);
    }

    if (!num12 || !num21 || !msg) {
        let error = "Missing argument: \n Example: \n .sub(7, 5, message) \n will sent in the channel of the message an embed with the number 2";
        throw new Error(error);
    }

    let embed6 = new Discord.MessageEmbed()
        .setTitle(`${num12} - ${num21} 🤔`)
        .setDescription(`I know! The answer is: ${+num12 - +num21}`)
        .setColor("0076FF")
    return msg.channel.send(embed6);
}

module.exports.sub = sub;

const multiply = (num11: number, num22: number, msg) => {
    if (typeof num11 !== 'number' || typeof num22 !== 'number') {
        let err = "Incorrect input!";
        throw new Error(err);
    }

    if (!num11 || !num22 || !msg) {
        let error = "Missing argument: \n Example: \n .multiply(5, 6, message) \n will sent in the channel of the message an embed with the number 30";
        throw new Error(error);
    }

    let embed6 = new Discord.MessageEmbed()
        .setTitle(`${num11} * ${num22} 🤔`)
        .setDescription(`I know! the answer is: ${+num11 * +num22}`)
        .setColor("0076FF")
    return msg.channel.send(embed6);
}

module.exports.multiplie = multiply;

const divide = (num111: number, num222: number, msg2) => {
    if (typeof num111 !== 'number' || typeof num222 !== 'number') {
        let err = "Incorrect input!";
        throw new Error(err);
    }

    if (!num111 || !num222 || !msg2) {
        let error = "missing argument: \n example: \n .divide(10, 2, message) \n will sent in the channel of the message an embed with the number 5";
        throw new Error(error);
    }

    let embed7 = new Discord.MessageEmbed()
        .setTitle(`${num111} * ${num222} 🤔`)
        .setDescription(`I know! the answer is: ${+num111 / +num222}`)
        .setColor("0076FF")
    return msg2.channel.send(embed7);
}

module.exports.divide = divide;