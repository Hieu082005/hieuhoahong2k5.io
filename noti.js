// Thông tin xác thực của bot Telegram mới
const token = '6966727119:AAG51zY-Frt6G4XkQhw6lDEGToMJO3rf5xM'; // Thay thế bằng token của bot Telegram mới
const chatId = '-4140704367'; // Thay thế bằng chat ID của siêu nhóm bạn muốn gửi thông báo đến

const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(token, { polling: true });
// Hàm để gửi thông báo vào siêu nhóm
function sendNotification(message) {
    bot.sendMessage(chatId, message.join('\n')); // Gửi thông báo vào siêu nhóm
}

// Thông báo cần gửi
const notifications = [
    {
        timer: '00:00:00 AM',
        message: ['12 𝒈𝒊𝒐̛̀ đ𝒆̂𝒎 𝒓𝒐̂̀𝒊 đ𝒐́. 𝑩𝒂̣𝒏 𝒄𝒐́ đ𝒊 𝒏𝒈𝒖̉ 𝒏𝒈𝒂𝒚 𝒌𝒉𝒐̂𝒏𝒈 𝒄𝒖̃𝒏𝒈 𝒎𝒖𝒐̣̂𝒏 𝒓𝒐̂̀𝒊','"Đ𝒆̂𝒎 𝒕𝒊̃𝒏𝒉 𝒍𝒂̣̆𝒏𝒈 𝒍𝒂̀ 𝒕𝒉𝒐̛̀𝒊 𝒈𝒊𝒂𝒏 𝒕𝒐̂́𝒕 𝒏𝒉𝒂̂́𝒕 đ𝒆̂̉ 𝒏𝒈𝒉𝒊̉ 𝒏𝒈𝒐̛𝒊 𝒗𝒂̀ 𝒄𝒉𝒖𝒂̂̉𝒏 𝒃𝒊̣ 𝒄𝒉𝒐 𝒎𝒐̣̂𝒕 𝒏𝒈𝒂̀𝒚 𝒎𝒐̛́𝒊 đ𝒂̂̀𝒚 𝒏𝒂̆𝒏𝒈 𝒍𝒖̛𝒐̛̣𝒏𝒈.']
    },
    {
        timer: '00:30:00 AM',
        message: ['12 𝒓𝒖̛𝒐̛̃𝒊 đ𝒆̂𝒎 𝒓𝒐̂̀𝒊 . 𝑩𝒂̣𝒏 𝒄𝒐́ đ𝒊 𝒏𝒈𝒖̉ 𝒏𝒈𝒂𝒚 𝒌𝒉𝒐̂𝒏𝒈 𝒄𝒖̃𝒏𝒈 𝒎𝒖𝒐̣̂𝒏 𝒓𝒐̂̀𝒊','𝑺𝒖̛̣ 𝒊𝒎 𝒍𝒂̣̆𝒏𝒈 𝒄𝒖̉𝒂 đ𝒆̂𝒎 𝒍𝒂̀𝒎 𝒄𝒉𝒐 𝒈𝒊𝒂̂́𝒄 𝒎𝒐̛ 𝒕𝒓𝒐̛̉ 𝒏𝒆̂𝒏 𝒔𝒐̂́𝒏𝒈 đ𝒐̣̂𝒏𝒈 𝒉𝒐̛𝒏 𝒃𝒂𝒐 𝒈𝒊𝒐̛̀ 𝒉𝒆̂́𝒕']
    },
    {
        timer: '01:00:00 AM',
        message: ['1 𝒈𝒊𝒐̛̀ 𝒔𝒂́𝒏𝒈 𝒓𝒐̂̀𝒊 𝒏𝒈𝒖̉ đ𝒊. 𝑴𝒐̣𝒆 𝒄𝒐𝒏 𝒍𝒐̛̣𝒏 𝒏𝒂̀𝒚 𝒏𝒐́𝒊 𝒌𝒉𝒐̂𝒏𝒈 𝒏𝒈𝒉𝒆 𝒂̀😤','𝑻𝒓𝒐𝒏𝒈 𝒈𝒊𝒂̂́𝒄 𝒏𝒈𝒖̉, 𝒕𝒂 𝒕𝒊̀𝒎 𝒕𝒉𝒂̂́𝒚 𝒔𝒖̛̣ 𝒚𝒆̂𝒏 𝒃𝒊̀𝒏𝒉 𝒗𝒂̀ 𝒔𝒖̛́𝒄 𝒎𝒂̣𝒏𝒉 đ𝒆̂̉ đ𝒐̂́𝒊 𝒎𝒂̣̆𝒕 𝒗𝒐̛́𝒊 𝒎𝒐̣𝒊 𝒕𝒉𝒖̛̉ 𝒕𝒉𝒂́𝒄𝒉 𝒌𝒉𝒊 𝒕𝒊̉𝒏𝒉 𝒅𝒂̣̂𝒚']
    },
    {
        timer: '02:00:00 AM',
        message: ['𝗦𝗮́𝗻𝗴 𝗿𝗼̂̀𝗶 𝘁𝗵𝘂̛́𝗰 𝗰𝗵𝗼̛𝗶 𝗴𝗮𝗺𝗲 𝗹𝗮̆́𝗺 𝘃𝗮̣̂𝘆 😴', '𝗡𝗴𝘂̉ 𝘁𝗵𝗶̀ 𝗸𝗵𝗼̂𝗻𝗴 𝗻𝗴𝘂̉ 𝘁𝗵𝘂̛́𝗰 đ𝗲̂́𝗻 𝘀𝗮́𝗻𝗴 𝘀𝘂̛𝗻𝗴 𝗺𝗮̆́𝘁 đ𝗼́ đ𝗮̆́𝗰 𝗯𝗶𝗲̣̂𝘁 𝗹𝗮̀ 𝗺𝗮̂́𝘆 𝗰𝗼̂ 𝗴𝗮́𝗶 ']
    },
    {
        timer: '03:00:00 AM',
        message: ['𝑶̛ 𝒌𝒊̀𝒂 3 𝒈𝒊𝒐̛̀ 𝒔𝒂́𝒏𝒈 𝒓𝒐̂̀𝒊 đ𝒐́. 𝒏𝒈𝒖̉ 𝒔𝒐̛́𝒎 𝒗𝒂̂̃𝒏 𝒄𝒐̀𝒏 𝒌𝒊̣𝒑']
    },
    {
        timer: '03:30:00 AM',
        message: ['3 𝒓𝒖̛𝒐̛̃𝒊 𝒔𝒂́𝒏𝒈 𝒓𝒐̂̀𝒊 𝒕𝒐̂𝒊 𝒌𝒉𝒐̂̀𝒏𝒈 𝒎𝒖𝒐̂́𝒏 𝒏𝒉𝒂̆́𝒄 𝒏𝒖̛̃𝒂😤']
    },
    {
        timer: '04:00:00 AM',
        message: ['𝑵𝒉𝒂̆́𝒄 𝒄𝒉𝒂́𝒏 𝒕𝒐̛́𝒊 4 𝒈𝒊𝒐̛̀ 𝒔𝒂́𝒏𝒈 𝒓𝒐̂̀𝒊. 𝑩𝒂̣𝒏 𝒌𝒉𝒐̂𝒏𝒈 𝒏𝒈𝒖̉ 𝒕𝒐̂𝒊 𝒎𝒂̣̆𝒄 𝒌𝒆̣̂ 𝒃𝒂̣𝒏 𝒍𝒖𝒐̂𝒏😘']
    },
    {
        timer: '05:00:00 AM',
        messager: ['𝑩𝒂̂𝒚 𝒈𝒊𝒐̛̀ 𝒍𝒂̀ 5 𝒈𝒊𝒐̛̀ 𝒔𝒂́𝒏𝒈. 𝑯𝒂̃𝒚 𝒅𝒂̣̂𝒚 𝒔𝒐̛́𝒎 𝒗𝒂̀ 𝒕𝒂̣̂𝒑 𝒕𝒉𝒆̂̉ 𝒅𝒖̣𝒄 𝒏𝒂̀𝒐. 𝑲𝒉𝒐̂𝒏𝒈 𝒕𝒉𝒊̀ 𝒏𝒈𝒖̉ 𝒏𝒖̛𝒐̛́𝒏𝒈 𝒕𝒊𝒆̂́𝒑 đ𝒊🤣']
    },
    {
        timer: '06:00:00 AM',
        message: ['𝗕𝗼𝘁 𝑳𝒂 𝑽𝒂̆𝒏 𝑯𝒊́𝒖 𝗰𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘀𝗮́𝗻𝗴 𝘃𝘂𝗶 𝘃𝗲̉ 😉', '𝗕𝘂𝗼̂̉𝗶 𝘀𝗮́𝗻𝗴 đ𝗮̂̀𝘆 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴 𝗻𝗵𝗮 𝗰𝗮́𝗰 𝗯𝗮̣𝗻 😙', '𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘀𝗮́𝗻𝗴 𝘃𝘂𝗶 𝘃𝗲̉ ❤️']
    },
    {
        timer: '06:30:00 AM',
        message: ['Đ𝒖̛̀𝒏𝒈 𝒃𝒐̉ 𝒃𝒖̛̃𝒂 𝒂̆𝒏 𝒔𝒂́𝒏𝒈 𝒏𝒉𝒆́❤❤']
    },
    {
        timer: '07:00:00 AM',
        messager: ['𝑩𝒂̆́𝒕 đ𝒂̂̀𝒖 đ𝒊 𝒍𝒂̀𝒎 𝒗𝒊𝒆̣̂𝒄 𝒕𝒉𝒐̂𝒊, 𝒄𝒉𝒖́𝒄 𝒄𝒂́𝒄 𝒃𝒂̣𝒏 𝒉𝒐𝒂̀𝒏 𝒕𝒉𝒂̀𝒏𝒉 𝒕𝒐̂́𝒕 𝒏𝒉𝒆́😘']
    },
    {
        timer: '09:00:00 AM',
        message: ['𝑪𝒖̃𝒏𝒈 𝒏𝒆̂𝒏 𝒏𝒈𝒉𝒊̉ 𝒕𝒂𝒚 1 𝒄𝒉𝒖́𝒕 đ𝒊 𝒌𝒉𝒐̂𝒏𝒈 𝒅𝒆̂̃ 𝒃𝒆̣̂𝒏𝒉 𝒍𝒂̆́𝒎 😚']
    },
    {
        timer: '11:00:00 AM',
        message: ['11 𝒈𝒊𝒐̛̀ 𝒕𝒓𝒖̛𝒂 𝒓𝒐̂̀𝒊 𝒃𝒂̣𝒏 đ𝒂̃ 𝒕𝒂𝒏 𝒄𝒂 𝒔𝒂́𝒏𝒈 𝒄𝒉𝒖̛𝒂?']
    },
    {
        timer: '12:00:00 AM',
        message: ['𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗿𝘂̛𝗮 𝘃𝘂𝗶 𝘃𝗲̉ 😋', '𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗿𝘂̛𝗮 𝗮̆𝗻 𝗻𝗴𝗼𝗻 𝗺𝗶𝗲̣̂𝗻𝗴 😋']
    },
    {
        timer: '13:00:00 PM',
        message: ['1 𝒈𝒊𝒐̛̀ 𝒄𝒉𝒊𝒆̂̀𝒖 𝒓𝒐̂̀𝒊 𝒗𝒂̀𝒐 𝒄𝒂 𝒄𝒉𝒊𝒆̂̀𝒖 𝒍𝒂̀𝒎 𝒗𝒊𝒆̣̂𝒄 𝒏𝒂̀𝒐🥰']
    },
    {
        timer: '15:00:00 PM',
        message: ['3 𝒈𝒊𝒐̛̀ 𝒄𝒉𝒊𝒆̂̀𝒖 𝒓𝒐̂̀𝒊 𝒏𝒈𝒉𝒊̉ 𝒕𝒂𝒚 1 𝒄𝒉𝒖́𝒕 𝒄𝒉𝒐 đ𝒐̛̃ 𝒎𝒆̣̂𝒕 😅']
    },
    {
        timer: '15:25:00 PM',
        message: ['3 𝒈𝒊𝒐̛̀ 𝒄𝒉𝒊𝒆̂̀𝒖 𝒓𝒐̂̀𝒊 𝒏𝒈𝒉𝒊̉ 𝒕𝒂𝒚 1 𝒄𝒉𝒖́𝒕 𝒄𝒉𝒐 đ𝒐̛̃ 𝒎𝒆̣̂𝒕 😅']
    },
    {
        timer: '17:00:00 PM',
        message: ['𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝗰𝗵𝗶𝗲̂̀𝘂 𝘁𝗮̀ 𝘃𝘂𝗶 𝘃𝗲̉🥰']
    },
    {
        timer: '18:30:00 PM',
        message: ['6 𝒓𝒖̛𝒐̛̃𝒊 𝒓𝒐̂̀𝒊 đ𝒐́. 𝑵𝒆̂́𝒖 𝒕𝒂𝒏 𝒍𝒂̀𝒎 𝒕𝒉𝒊̀ 𝒗𝒆̂̀ 𝒏𝒂̂́𝒖 𝒄𝒐̛𝒎 𝒏𝒉𝒂 𝒌𝒉𝒐̂𝒏𝒈 đ𝒖̛𝒐̛̣𝒄 𝒍𝒂 𝒄𝒂̀ 𝒌𝒉𝒐̂𝒏𝒈 𝒗𝒆̂̀ 𝒗𝒐̛̣ 𝒎𝒂̆́𝒏𝒈 🤣🤣']
    },
    {
        timer: '19:00:00 PM',
        message: ['𝑩𝒂̂𝒚 𝒈𝒊𝒐̛̀ 𝒍𝒂̀ 7 𝒈𝒊𝒐̛̀ 𝒕𝒐̂́𝒊. 𝑪𝒉𝒖́𝒄 𝒃𝒂̣𝒏 𝒄𝒐́ 1 𝒃𝒖𝒐̂̉𝒊 𝒕𝒐̂́𝒊 𝒂𝒏 𝒍𝒂̀𝒏𝒉 𝒄𝒂̣𝒏𝒉 𝒈𝒊𝒂 đ𝒊̀𝒏𝒉']
    },
    {
        timer: '20:00:00 PM',
        message: ['8 𝒈𝒊𝒐̛̀ 𝒕𝒐̂́𝒊 𝒓𝒐̂̀𝒊 𝒅𝒐̣𝒏 𝒎𝒂̂𝒎 𝒂̆𝒏 𝒄𝒐̛𝒎 𝒕𝒉𝒐̂𝒊']
    },
    {
        timer: '21:00:00 PM',
        message: ['Đ𝒊 𝒅𝒂̣𝒐 1 𝒄𝒉𝒖́𝒕 đ𝒊 𝒔𝒂𝒖 𝒄𝒂̉ 𝒏𝒈𝒂̀𝒚 đ𝒊 𝒍𝒂̀𝒎/𝒉𝒐̣𝒄 𝒕𝒂̣̂𝒑 𝒎𝒆̣̂𝒕 𝒎𝒐̉𝒊 🥰']
    },
    {
        timer: '22:00:00 PM',
        message: ['Đ𝒊 𝒗𝒆̂̀ 𝒏𝒈𝒖̉ đ𝒊 𝒎𝒖𝒐̣̂𝒏 𝒓𝒐̂̀𝒊']
    },
    {
        timer: '23:00:00 PM',
        message: ['𝑲𝒉𝒖𝒚𝒂 𝒓𝒐̂̀𝒊 𝒄𝒉𝒖́𝒄 𝒃𝒂̣𝒏 𝒏𝒈𝒖̉ 𝒏𝒈𝒐𝒏 𝒏𝒉𝒆́😘','𝑵𝒈𝒖̉ 𝒏𝒈𝒐𝒏 𝒕𝒉𝒊̀ 𝒎𝒂𝒊 𝒍𝒂̀𝒎 𝒗𝒊𝒆̣̂𝒄/𝒉𝒐̣𝒄 𝒕𝒂̣̂𝒑 𝒎𝒐̛́𝒊 𝒉𝒊𝒆̣̂𝒖 𝒒𝒖𝒂̉ đ𝒖̛𝒐̛̣𝒄']
    }
];
// Lặp qua mảng thông báo và đặt hẹn giờ cho mỗi thông báo
notifications.forEach(notification => {
    const timer = notification.timer;
    const message = notification.message;

    // Tạo hẹn giờ
    scheduleNotification(timer, message);
});

// Hàm để đặt hẹn giờ và gửi thông báo
function scheduleNotification(timer, message) {
    // Chuyển đổi thời gian timer sang milliseconds
    const [hours, minutes, seconds] = timer.split(':');
    const now = new Date();
    const scheduledTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        parseInt(hours),
        parseInt(minutes),
        parseInt(seconds)
    );
    const timeDiff = scheduledTime.getTime() - now.getTime();

    // Đặt hẹn giờ và gửi thông báo
    if (timeDiff > 0) {
        setTimeout(() => {
            // Gửi thông báo khi hẹn giờ
            sendNotification(message);
            // Lặp lại sau mỗi 24 giờ
            setInterval(() => {
                sendNotification(message);
            }, 24 * 60 * 60 * 1000);
        }, timeDiff);
    }
}
console.log('Đang chạy');

