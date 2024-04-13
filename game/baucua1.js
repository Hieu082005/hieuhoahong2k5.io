const fs = require('fs');

async function baucua1(ctx, match) {
    const options = match.input.split(' '); // Tách lệnh và các đối số
    const choice = options[1].toLowerCase(); // Lựa chọn của người chơi
    const amount = parseInt(options[2]); // Số tiền cược

    // Đọc dữ liệu từ file data.json
    const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

    // Kiểm tra xem người chơi có đủ tiền để cược không
    if (data[ctx.from.id].money < amount) {
        return ctx.reply('Bạn không có đủ tiền để cược.');
    }

    // Lấy các con bầu cua ngẫu nhiên
    const results = ['bau', 'cua', 'tom', 'ca', 'nai', 'ga'];
    const spinResults = [];
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * results.length);
        spinResults.push(results[randomIndex]);
    }

    // Đếm số lần xuất hiện của lựa chọn trong kết quả quay
    const correctResultsCount = spinResults.filter(result => result === choice).length;

    // Xác định số tiền thắng dựa trên số lượng kết quả đúng
    let winAmount = 0;
    switch (correctResultsCount) {
        case 1:
            winAmount = amount * 2;
            break;
        case 2:
            winAmount = amount * 4;
            break;
        case 3:
            winAmount = amount * 10;
            break;
        default:
            winAmount = 0;
            break;
    }

    // Cập nhật số tiền của người chơi
    data[ctx.from.id].money += winAmount;
    fs.writeFileSync('data.json', JSON.stringify(data));

    // Gửi kết quả cho người chơi
    return ctx.reply(`Kết quả: ${spinResults.join(' ')}\nBạn ${winAmount > 0 ? 'thắng' : 'thua'} ${winAmount} tiền.`);
}

module.exports = { execute: baucua1 };
