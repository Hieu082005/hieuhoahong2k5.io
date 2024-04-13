const { Composer } = require('telegraf');

const hiCommand = new Composer();
const fs = require('fs');

const greetings = [
    "hi", "hello", "chào", "hí", "lô", "hí ae", "hi mng", "hi mn", "chào ae", "chào mn",
    "chào mng", "hello ae", "alo", "hello mn", "hello mng", "hii", "hiii", "hi cậu", 
    "chào cậu", "lô cậu", "hi bạn", "lô bạn"
];

hiCommand.on('text', (ctx) => {
    const userText = ctx.message.text.toLowerCase();
    if (greetings.includes(userText)) {
        const name = ctx.message.from.first_name;
        const gifPath = __dirname + `/hi.gif`;
        ctx.replyWithAnimation({ source: fs.readFileSync(gifPath) }, { caption: `Chào cậu ${name} nha, chúc cậu một ngày mới tốt lành ❤️. Tương tác đều vô nhé 🥰` });
    }
});

module.exports = hiCommand;
