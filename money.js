const fs = require('fs');

function execute(ctx) {
    let userId;
    if (ctx.message.chat.type === 'private') {
        userId = ctx.message.from.id.toString();
    } else {
        userId = ctx.message.from.username || ctx.message.from.first_name;
    }

    const dataFilePath = './banking/data.json'; // Đường dẫn đến file data.json

    // Đọc nội dung của file data.json
    const userData = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

    // Kiểm tra xem người dùng có trong dữ liệu không
    if (userData[userId]) {
        const userMoney = userData[userId];
        return ctx.reply(`Số tiền trong tài khoản của bạn là: ${userMoney}`);
    } else {
        return ctx.reply('Bạn chưa có số tiền trong tài khoản.');
    }
}

module.exports = { execute };
