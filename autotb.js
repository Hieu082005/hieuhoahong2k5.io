// Thông tin xác thực của bot Telegram mới
const token = '6557355973:AAEhGU7tMmQexnh9DJUH5oE9a6Ey1iq-Odk'; // Thay thế bằng token của bot Telegram mới
const chatId = '-4140704367'; // Thay thế bằng chat ID của siêu nhóm bạn muốn gửi thông báo đến

const TelegramBot = require('node-telegram-bot-api');

// Khởi tạo bot Telegram mới
const bot = new TelegramBot(token, { polling: true });

// Hàm để gửi thông báo vào siêu nhóm
function sendNotification(message) {
    bot.sendMessage(chatId, message.join('\n')); // Gửi thông báo vào siêu nhóm
}

// Thông báo cần gửi
const notifications = [
    {
        timer: '03:35:00 AM',
        message: ['𝗧𝗵𝘂̛́𝗰 𝗴𝗶̀ 𝗹𝗮̆́𝗺 𝘃𝗮̣̂𝘆 𝟯 𝗴𝗶𝗼̛̀ 𝘀𝗮́𝗻𝗴 𝗿𝗼̂̀𝗶 😴', '𝗡𝗴𝘂̉ đ𝗶 𝗺𝗮𝗶 𝗰𝗼𝗻 đ𝗶 𝗹𝗮̀𝗺 đ𝗶 𝗵𝗼̣𝗰 𝗰𝗵𝘂̛́ 😇']
    },
    {
        timer: '03:00:00 AM',
        message: ['𝗧𝗵𝘂̛́𝗰 𝗴𝗶̀ 𝗹𝗮̆́𝗺 𝘃𝗮̣̂𝘆 𝟯 𝗴𝗶𝗼̛̀ 𝘀𝗮́𝗻𝗴 𝗿𝗼̂̀𝗶 😴', '𝗡𝗴𝘂̉ đ𝗶 𝗺𝗮𝗶 𝗰𝗼𝗻 đ𝗶 𝗹𝗮̀𝗺 đ𝗶 𝗵𝗼̣𝗰 𝗰𝗵𝘂̛́ 😇']
    },
    {
        timer: '02:00:00 AM',
        message: ['𝗦𝗮́𝗻𝗴 𝗿𝗼̂̀𝗶 𝘁𝗵𝘂̛́𝗰 𝗰𝗵𝗼̛𝗶 𝗴𝗮𝗺𝗲 𝗹𝗮̆́𝗺 𝘃𝗮̣̂𝘆 😴', '𝗡𝗴𝘂̉ 𝘁𝗵𝗶̀ 𝗸𝗵𝗼̂𝗻𝗴 𝗻𝗴𝘂̉ 𝘁𝗵𝘂̛́𝗰 đ𝗲̂́𝗻 𝘀𝗮́𝗻𝗴 𝘀𝘂̛𝗻𝗴 𝗺𝗮̆́𝘁 đ𝗼́ đ𝗮̆́𝗰 𝗯𝗶𝗲̣̂𝘁 𝗹𝗮̀ 𝗺𝗮̂́𝘆 𝗰𝗼̂ 𝗴𝗮́𝗶 😇']
    },
    {
        timer: '01:00:00 AM',
        message: ['𝗦𝗮́𝗻𝗴 𝗿𝗼̂̀𝗶 𝘁𝗵𝘂̛́𝗰 𝗰𝗵𝗼̛𝗶 𝗴𝗮𝗺𝗲 𝗹𝗮̆́𝗺 𝘃𝗮̣̂𝘆 😴', '𝗡𝗴𝘂̉ 𝘁𝗵𝗶̀ 𝗸𝗵𝗼̂𝗻𝗴 𝗻𝗴𝘂̉ 𝘁𝗵𝘂̛́𝗰 đ𝗲̂́𝗻 𝘀𝗮́𝗻𝗴 𝘀𝘂̛𝗻𝗴 𝗺𝗮̆́𝘁 đ𝗼́ đ𝗮̆́𝗰 𝗯𝗶𝗲̣̂𝘁 𝗹𝗮̀ 𝗺𝗮̂́𝘆 𝗰𝗼̂ 𝗴𝗮́𝗶 😇']
    },
    {
        timer: '12:00:00 AM',
        message: ['𝗦𝗮́𝗻𝗴 đ𝗲̂́𝗻 𝗻𝗼̛𝗶 𝗿𝗼̂̀𝗶 𝗸𝗵𝗼̂𝗻𝗴 𝗻𝗴𝘂̉ 𝗮̀ 😴', '𝗠𝘂𝗼̣̂𝗻 𝗿𝗼̂̀𝗶 đ𝗼́ 𝗹𝗼 𝗺𝗮̀ đ𝗶 𝗻𝗴𝘂̉ 𝘀𝗼̛́𝗺 𝗺𝗮𝗶 𝗱𝗮̣̂𝘆 𝗺𝘂𝗼̣̂𝗻 đ𝗼́ 😇']
    },
    {
        timer: '11:00:00 PM',
        message: ['𝗞𝗵𝘂𝘆𝗮 𝗿𝗼̂̀𝗶 𝗻𝗴𝘂̉ 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗼̛𝗶 𝘁𝗵𝘂̛́𝗰 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗼̂́𝘁 𝗰𝗵𝗼 𝘀𝘂̛́𝗰 𝗸𝗵𝗼𝗲̉ đ𝗮̂𝘂😴', '𝗞𝗵𝘂𝘆𝗮 𝗿𝗼̂̀𝗶 𝗻𝗴𝘂̉ 𝗻𝗴𝗼𝗻 𝗻𝗵𝗲́ 𝗰𝗮́𝗰 𝗯𝗮̣𝗻😇']
    },
    {
        timer: '10:00:00 PM',
        message: ['𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗴𝘂̉ 𝗻𝗴𝗼𝗻😴', '𝗞𝗵𝘂𝘆𝗮 𝗿𝗼̂̀𝗶 𝗻𝗴𝘂̉ 𝗻𝗴𝗼𝗻 𝗻𝗵𝗲́ 𝗰𝗮́𝗰 𝗯𝗮̣𝗻😇']
    },
    {
        timer: '09:00:00 PM',
        message: ['𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗼̂́𝗶 𝘃𝘂𝗶 𝘃𝗲̉ 🥰', '𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗼̂́𝗶 đ𝗮̂̀𝘆 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴 😇']
    },
    {
        timer: '01:00:00 PM',
        message: ['𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝗰𝗵𝗶𝗲̂̀𝘂 𝘃𝘂𝗶 𝘃𝗲̉ 🙌', '𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝗰𝗵𝗶𝗲̂̀𝘂 đ𝗮̂̀𝘆 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴 😼']
    },
    {
        timer: '06:00:00 AM',
        message: ['𝗕𝗼𝘁 La Văn Híu 𝗰𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘀𝗮́𝗻𝗴 𝘃𝘂𝗶 𝘃𝗲̉ 😉', '𝗕𝘂𝗼̂̉𝗶 𝘀𝗮́𝗻𝗴 đ𝗮̂̀𝘆 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴 𝗻𝗵𝗮 𝗰𝗮́𝗰 𝗯𝗮̣𝗻 😙', '𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘀𝗮́𝗻𝗴 𝘃𝘂𝗶 𝘃𝗲̉ ❤️']
    },
    {
        timer: '06:29:59 AM',
        message: ['𝗕𝗼𝘁 La Văn Híu 𝗰𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘀𝗮́𝗻𝗴 𝘃𝘂𝗶 𝘃𝗲̉ 😉', '𝗕𝘂𝗼̂̉𝗶 𝘀𝗮́𝗻𝗴 đ𝗮̂̀𝘆 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴 𝗻𝗵𝗮 𝗰𝗮́𝗰 𝗯𝗮̣𝗻 😙', '𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘀𝗮́𝗻𝗴 𝘃𝘂𝗶 𝘃𝗲̉ ❤️']
    },
    {
        timer: '15:07:00 PM',
        message: ['𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗿𝘂̛𝗮 𝘃𝘂𝗶 𝘃𝗲̉ 😋', '𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗿𝘂̛𝗮 𝗮̆𝗻 𝗻𝗴𝗼𝗻 𝗺𝗶𝗲̣̂𝗻𝗴 😋']
    },
    {
        timer: '11:00:00 AM',
        message: ['𝗖𝗮̉ 𝘀𝗮́𝗻𝗴 𝗺𝗲̣̂𝘁 𝗺𝗼̉𝗶 𝗿𝗼̂̀𝗶 𝗻𝗴𝗵𝗶̉ 𝗻𝗴𝗼̛𝗶 𝗻𝗮̣𝗽 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴 𝗻𝗮̀𝗼 !!😴']
    },
    {
        timer: '10:00:00 AM',
        message: ['𝗡𝗮̂́𝘂 𝗰𝗼̛𝗺 𝗻𝗵𝗼̛́ 𝗯𝗮̣̂𝘁 𝗻𝘂́𝘁 𝗻𝗵𝗮 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 😙']
    },
    {
        timer: '03:50:00 AM',
        message: ['Ngủ mẹ đi muộn lắm rồi đó😼']
    },
    {
        timer: '03:05:00 PM',
        message: ['𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝗰𝗵𝗶𝗲̂̀𝘂 𝘁𝗮̀ 𝘃𝘂𝗶 𝘃𝗲̉🥰']
    },
    {
        timer: '06:46:00 AM',
        message: ['𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 sáng 𝘃𝘂𝗶 𝘃𝗲̉🥰']
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