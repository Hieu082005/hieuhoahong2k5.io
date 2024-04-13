const { Telegraf } = require('telegraf');
const config = require('./config');
const bot = new Telegraf(config.token); // Sử dụng token từ config
// Khởi tạo một bot nhưng không cần cung cấp token

// Xóa tất cả cache của bot
bot.telegram.deleteWebhook()
    .then(() => {
        console.log('Đã xóa cache thành công.');
    })
    .catch((error) => {
        console.error('Lỗi khi xóa cache:', error);
    });
