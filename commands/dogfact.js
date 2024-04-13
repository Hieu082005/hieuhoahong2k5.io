const { Composer } = require('telegraf');
const fetch = require('node-fetch');

const dogFactCommand = new Composer();

dogFactCommand.command('dogfact', async (ctx) => {
    try {
        const response = await fetch('https://some-random-api.ml/animal/dog');
        const data = await response.json();
        const dogFact = data.fact;
        ctx.reply(dogFact);
    } catch (error) {
        console.error('Error fetching dog fact:', error);
        ctx.reply('Xin lỗi, không thể lấy được sự thật về chó vào lúc này.');
    }
});

module.exports = dogFactCommand;
