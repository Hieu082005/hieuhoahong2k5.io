// lyrics.js

const axios = require('axios');

module.exports = {
    name: 'lyrics',
    description: 'Hiển thị lời bài hát của một bài hát cụ thể từ nhiều nguồn khác nhau (nhạc Việt, Trung, Ấn Độ...).',
    async execute(ctx, songName) {
        try {
            // Gửi yêu cầu API để lấy lời bài hát
            const response = await axios.get(`https://api.lyrics.ovh/v1/artist/title`);
            const lyricsData = response.data;

            // Kiểm tra xem lời bài hát có được tìm thấy không
            if (!lyricsData.lyrics) {
                ctx.reply('Xin lỗi, không tìm thấy lời bài hát cho bài hát này.');
                return;
            }

            // Tạo thông điệp chứa lời bài hát
            const message = `🎵 **Lời bài hát của "${songName}":**\n\n${lyricsData.lyrics}`;

            // Gửi tin nhắn chứa lời bài hát
            ctx.reply(message);
        } catch (error) {
            console.error('Đã xảy ra lỗi khi lấy lời bài hát:', error);
            ctx.reply('Xin lỗi, đã xảy ra lỗi khi lấy lời bài hát. Vui lòng thử lại sau.');
        }
    },
};
