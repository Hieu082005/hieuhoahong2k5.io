const axios = require('axios');

async function sendCatGif(ctx) {
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?format=gif&mime_types=gif');
        const gifUrl = response.data[0].url;

        if (!gifUrl || !gifUrl.startsWith('http')) {
            throw new Error('Không thể lấy được gif mèo.');
        }

        return ctx.replyWithPhoto({ url: gifUrl }); // Thay đổi thành replyWithPhoto để gửi ảnh thay vì gửi file
    } catch (error) {
        console.error('Lỗi khi lấy gif mèo:', error);
        return ctx.reply('Không thể lấy được gif mèo. Vui lòng thử lại sau.');
    }
}

async function meow(ctx) {
    return sendCatGif(ctx);
}

module.exports = { meow };
