const { Telegraf } = require('telegraf');
const fs = require('fs');
const config = require('../config.json');
const { searchYouTube } = require('./ytb.js');

// Tạo một đối tượng bot từ lớp Telegraf
const bot = new Telegraf(config.telegramToken);

// Lưu trữ thông tin tin nhắn gốc và danh sách video
const videoData = {};

// Xử lý lệnh /ytb
bot.command('ytb', async (ctx) => {
    // Kiểm tra xem tin nhắn này từ một nhóm chat hay không
    if (ctx.chat.type === 'supergroup' || ctx.chat.type === 'group') {
        // Lấy nội dung của tin nhắn từ người dùng
        const query = ctx.message.text.replace('/ytb ', '');

        // Gọi hàm searchYouTube để tìm kiếm video
        const videos = await searchYouTube(query);

        // Kiểm tra xem có video nào không
        if (videos.length > 0) {
            // Gửi danh sách video cho nhóm chat
            let message = "Danh sách 10 video liên quan:\n";
            videos.forEach((video, index) => {
                message += `${video.index}. ${video.title}\n`;
                // Lưu trữ thông tin tin nhắn gốc và danh sách video
                videoData[video.index] = {
                    messageId: ctx.message.message_id,
                    video: video
                };
            });
            const sentMessage = await ctx.reply(message);
            // Lưu thông tin tin nhắn gốc
            videoData['originalMessageId'] = sentMessage.message_id;
        } else {
            ctx.reply("Không tìm thấy video nào.");
        }
    } else {
        ctx.reply("Lệnh này chỉ có thể sử dụng trong nhóm chat.");
    }
});

// Xử lý tin nhắn trả lời từ người dùng
bot.on('message', async (ctx) => {
    // Kiểm tra xem tin nhắn này có phải là tin nhắn trả lời của bot hay không
    if (ctx.message.reply_to_message && ctx.message.reply_to_message.from.id === bot.botInfo.id) {
        // Lấy nội dung tin nhắn trả lời
        const replyText = ctx.message.text;
        // Kiểm tra xem nội dung tin nhắn trả lời có phải là số thứ tự của video không
        if (replyText && /^\d+$/.test(replyText)) {
            const videoIndex = parseInt(replyText);
            // Kiểm tra xem số thứ tự này có tồn tại trong danh sách video không
            if (videoData[videoIndex]) {
                const videoUrl = videoData[videoIndex].video.url;
                // Gửi video cho người dùng
                await ctx.reply(videoUrl);
                // Xóa tin nhắn gốc và tin nhắn trả lời
                await ctx.telegram.deleteMessage(ctx.chat.id, videoData.originalMessageId);
                await ctx.telegram.deleteMessage(ctx.chat.id, ctx.message.message_id);
            }
        }
    }
});

// Bắt đầu hoạt động của bot
bot.launch().then(() => {
    console.log('Bot đã khởi động');
}).catch(err => {
    console.error('Không thể khởi động bot:', err);
});
