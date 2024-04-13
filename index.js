const { Telegraf } = require('telegraf');
const TelegramBot = require('node-telegram-bot-api');
const config = require('./config.json');

// Khởi tạo bot với token từ config
const bot = new Telegraf(config.token);

// Import các lệnh từ các file commands
const timeCommand = require('./commands/timetp.js');
const movieCommand = require('./commands/movie.js');
const quoteCommand = require('./commands/quote.js');
const lyricsCommand = require('./commands/loibaihat.js');
const searchCommand = require('./commands/search.js'); 
const weatherCommand = require('./commands/weather.js');
const uptimeCommand = require('./commands/uptime.js');
const infoCommand = require('./commands/info.js');
const dogFactCommand = require('./commands/dogfact.js');
const cunghoangdaoCommand = require('./commands/12cunghoangdao.js');
const sinhnhatadCommand = require('./commands/sinhnhatad.js');
const setmoneyCommand = require('./banking/setmoney.js');
const moneyCommand = require('./money.js');
const hiCommand = require('./commands/hi.js');
const ipCommand = require('./commands/ip.js'); 
const idCommand = require('./commands/id.js');
const meowCommand = require('./commands/meow.js');
const dogCommand = require('./commands/dog.js');
const gaiCommand = require('./commands/gai.js');
// Đăng ký các lệnh với bot
bot.command('timetp', timeCommand.execute);
bot.command('movie', movieCommand.execute);
bot.command('quote', quoteCommand.execute);
bot.command('loibaihat', lyricsCommand.execute);
bot.command('weather',weatherCommand.execute);
bot.command('uptime', uptimeCommand.execute);
bot.command('sinhnhatad', sinhnhatadCommand);
bot.command('setmoney', setmoneyCommand.run);
bot.command('money', moneyCommand.execute);
bot.use(infoCommand);
bot.command('meow', meowCommand.meow);
bot.command('dog',dogCommand.dog);
bot.use(dogFactCommand);
bot.use(cunghoangdaoCommand);
bot.use(hiCommand);
bot.command('id', idCommand); 
bot.use(ipCommand);
// Gọi hàm để đăng ký lệnh search với bot
searchCommand(bot);
// Xử lý lệnh /gai
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    if (text === '/gai') {
        sendRandomAnhgai(bot, chatId);
    }
});

// hoặc có thể sử dụng phương thức bot.hears()
bot.hears('/gai', (ctx) => {
    sendRandomAnhgai(ctx.bot, ctx.chat.id);
});
// Tạo menu
const menu = `
    𝑴𝒆𝒏𝒖 𝒍𝒆̣̂𝒏𝒉:
    /timetp - Thời gian ở thành phố TP
    /movie - Xem lịch chiếu phim
    /quote - Trích dẫn ngẫu nhiên
    /loibaihat - Hiển thị lời bài hát
    /weather - Hiện thời tiết
    /uptime - Thời gian hoạt động của bot
    /sinhnhatad - Sinh nhật ad
    /setmoney - Đặt số tiền
    /money - Xem số tiền
    /meow - Gâu gâu
    /dog - Gâu gâu
    /id - ID của bạn
`;

// Hiển thị menu khi nhận lệnh /menu
bot.hears('menu', (ctx) => ctx.telegram.sendMessage(ctx.chat.id, menu));


// Xử lý lệnh /meunu hoặc tin nhắn "menu"
bot.hears('/menu', (ctx) => ctx.telegram.sendMessage(ctx.chat.id, menu));
bot.hears('menu', (ctx) => ctx.telegram.sendMessage(ctx.chat.id, menu));

// Lắng nghe các tin nhắn
bot.launch();

console.log('Bot đang chạy...');
