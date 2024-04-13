const fs = require('fs');

function run(ctx) {
    const [command, action, amount, user] = ctx.message.text.split(' ');
    const config = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));
    const dataFilePath = config.dataFilePath;

    if (!amount || !user) {
        return ctx.reply('Vui lòng nhập số tiền và tag người dùng.');
    }

    let userId;
    if (ctx.message.chat.type === 'private') {
        userId = user; // Trong trường hợp chat riêng tư, userId sẽ là username
    } else {
        // Trong trường hợp group chat hoặc supergroup, userId sẽ là user_id của người được tag
        userId = user.slice(1); // Lấy user_id bằng cách loại bỏ ký tự "@" ở đầu
    }

    const userData = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

    switch (action) {
        case 'add':
            if (!userData[userId]) {
                userData[userId] = 0;
            }
            userData[userId] += parseInt(amount);
            fs.writeFileSync(dataFilePath, JSON.stringify(userData, null, 4));
            return ctx.reply(`Đã thêm ${amount} vào tài khoản của ${user}.`);
        case 'set':
            userData[userId] = parseInt(amount);
            fs.writeFileSync(dataFilePath, JSON.stringify(userData, null, 4));
            return ctx.reply(`Đã đặt số tiền của ${user} thành ${amount}.`);
        case 'clean':
            if (userData[userId]) {
                delete userData[userId];
                fs.writeFileSync(dataFilePath, JSON.stringify(userData, null, 4));
                return ctx.reply(`Đã xóa tài khoản của ${user}.`);
            } else {
                return ctx.reply(`Không tìm thấy tài khoản của ${user}.`);
            }
        default:
            return ctx.reply('Hành động không hợp lệ. Vui lòng sử dụng "add", "set" hoặc "clean".');
    }
}

module.exports = { run };
