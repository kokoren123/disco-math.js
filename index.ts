import * as Discord from 'discord.js';
const add = (num1, num2, msg) => {

    if (!num1 || !num2 || !msg) {
        let error = "missing argument: \n example: \n .add(5, 6, message) \n will sent in the channel of the message an embed with the number 11";
        throw new Error(error)
    }

    let embed6 = new Discord.MessageEmbed()
        .setTitle(`${num1} + ${num2} 🤔`)
        .setDescription(`I know! The answer is: ${+num1 + +num2}`)
        .setColor("0076FF")
    return msg.channel.send(embed6)
}

module.exports.add = add




const multiplie = (num11, num22, msg) => {

    if (!num11 || !num22 || !msg) {
        let error = "missing argument: \n example: \n .multiplie(5, 6, message) \n will sent in the channel of the message an embed with the number 30";
        throw new Error(error)
    }

    let embed6 = new Discord.MessageEmbed()
        .setTitle(`${num11} * ${num22} 🤔`)
        .setDescription(`I know! the answer is: ${+num11 * +num22}`)
        .setColor("0076FF")
    return msg.channel.send(embed6)
}

module.exports.multiplie = multiplie