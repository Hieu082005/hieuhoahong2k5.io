const { Composer } = require('telegraf');

const sinhnhatadCommand = new Composer();

// Ngày sinh nhật của admin bot (định dạng: 'YYYY-MM-DD')
const ngaySinhNhat = new Date().getFullYear() + '-08-02'; // Sử dụng năm hiện tại

sinhnhatadCommand.command('sinhnhatad', (ctx) => {
    // Tính số millisecond còn lại đến ngày sinh nhật
    const ngaySinhNhatMs = new Date(ngaySinhNhat).getTime();
    const ngayHienTaiMs = new Date().getTime();
    const timeRemainingMs = ngaySinhNhatMs - ngayHienTaiMs;

    // Chuyển đổi millisecond thành ngày và giờ
    const daysRemaining = Math.floor(timeRemainingMs / (1000 * 60 * 60 * 24));
    const hoursRemaining = Math.floor((timeRemainingMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    // Gửi tin nhắn với số ngày và giờ còn lại
    ctx.reply(`⏳ Đ𝑒̂́𝑚 𝑛𝑔𝑢̛𝑜̛̣𝑐 đ𝑒̂́𝑛 𝑛𝑔𝑎̀𝑦 𝑠𝑖𝑛ℎ 𝑛ℎ𝑎̣̂𝑡 𝑐𝑢̉𝑎 𝑎𝑑𝑚𝑖𝑛 𝑏𝑜𝑡:
    𝐶𝑜̀𝑛 ${daysRemaining} 𝑛𝑔𝑎̀𝑦 𝑣𝑎̀ ${hoursRemaining} 𝑔𝑖𝑜̛̀ 𝑛𝑢̛̃𝑎 🎉`);
});

module.exports = sinhnhatadCommand;
