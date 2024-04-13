const axios = require('axios');

async function sendDogGif(ctx) {
    try {
        const response = await axios.get('https://api.thedogapi.com/v1/images/search?format=gif&mime_types=gif');
        const gifUrl = response.data[0].url;

        if (!gifUrl || !gifUrl.startsWith('http')) {
            throw new Error('Không thể lấy được gif chó.');
        }

        return ctx.replyWithPhoto({ url: gifUrl });
    } catch (error) {
        console.error('Lỗi khi lấy gif chó:', error);
        return ctx.reply('Không thể lấy được gif chó. Vui lòng thử lại sau.');
    }
}

async function dog(ctx) {
    return sendDogGif(ctx);
}

module.exports = { dog };
