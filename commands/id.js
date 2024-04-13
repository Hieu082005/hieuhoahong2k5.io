const { Composer } = require('telegraf');

const idCommand = new Composer();

idCommand.command('id', (ctx) => {
    // Lấy thông tin nhóm
    const chat = ctx.message.chat;
    const groupName = chat.title;
    const groupId = chat.id;
    const memberCount = chat.membersCount;

    // Lấy thông tin người dùng lệnh
    const userId = ctx.from.id;

    // Gửi thông tin về nhóm và người dùng lệnh
    const message = `Tên nhóm: ${groupName}\nID nhóm: ${groupId}\nSố lượng thành viên: ${memberCount}\nUid người dùng lệnh: ${userId}`;
    ctx.reply(message);
});

module.exports = idCommand;
