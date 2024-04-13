const moment = require('moment');

let botStartTime = null; // Thời gian khởi động của bot

// Hàm để cập nhật thời gian bắt đầu của bot
function setBotStartTime() {
    botStartTime = moment('2024-04-10T23:51:45');
}

// Hàm để tính thời gian hoạt động của bot
function getBotUptime() {
    // Kiểm tra nếu bot chưa được khởi động
    if (!botStartTime) {
        return 'Bot chưa được khởi động.';
    }

    // Tính thời gian hoạt động từ thời điểm khởi động đến thời điểm hiện tại
    const uptime = moment.duration(moment().diff(botStartTime));

    return uptime; // Trả về đối tượng moment.duration
}

// Hàm để lưu thời gian khởi động của bot và trả về thông điệp phản hồi
function getUptimeMessage() {
    const formattedStartTime = botStartTime.format('MMMM D YYYY HH:mm:ss');
    const formattedCurrentTime = moment().format('MMMM D YYYY HH:mm:ss');
    const uptime = getBotUptime(); // Lấy thời gian hoạt động của bot

    return `Bot được tạo từ: ${formattedStartTime}\nĐến hiện tại là: ${formattedCurrentTime}\nNó đã hoạt động được: ${uptime.humanize()}`;
}

// Gọi hàm để cập nhật thời gian bắt đầu của bot khi bot khởi động
setBotStartTime();

// Export hàm execute
module.exports = {
    execute: (ctx) => {
        // Gửi thông điệp về thời gian hoạt động của bot
        ctx.reply(getUptimeMessage());
    }
};
